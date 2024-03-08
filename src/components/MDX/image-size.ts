import path from "path";

import { readFile } from "fs/promises";
import { imageDimensionsFromData } from "image-dimensions";
import { cache } from "react";
import { visit } from "unist-util-visit";
export type Size = {
	width: number | undefined;
	height: number | undefined;
	orientation?: number;
	type?: string;
};
export type SizeCalculationResult = {
	images?: Size[];
} & Size;
export type IImage = {
	validate: (input: Uint8Array) => boolean;
	calculate: (input: Uint8Array, filepath?: string) => SizeCalculationResult;
};
type ImageNode = {
	type: "element";
	tagName: "img";
	properties: {
		src: string;
		height?: number;
		width?: number;
		blurDataURL?: string;
		placeholder?: "blur" | "empty";
	};
};

function isImageNode(node: ImageNode) {
	const img = node as ImageNode;
	return img.type === "element" && img.tagName === "img" && img.properties && typeof img.properties.src === "string";
}
async function addProps(node: ImageNode): Promise<void> {
	const local_img = path.join(process.cwd(), "public", node.properties.src);

	let res: SizeCalculationResult | undefined;
	const isExternal = node.properties.src.startsWith("http");

	if (!isExternal) {
		const file = await readFile(local_img);

		res = imageDimensionsFromData(file);
	} else {
		const buffer = await fetch(node.properties.src).then(async (res) => Buffer.from(await res.arrayBuffer()));

		res = imageDimensionsFromData(buffer);
	}
	console.log(node.properties.src);
	if (!res) throw Error(`Invalid image with src "${node.properties.src}"`);

	node.properties.width = res.width;
	node.properties.height = res.height;
}

const imageMetadata = cache(() => {
	return async function transformer(tree): Promise<Node> {
		const images: ImageNode[] = [];

		visit(tree, "element", (node) => {
			if (isImageNode(node)) {
				images.push(node);
			}
		});

		for (const image of images) {
			await addProps(image);
		}

		return tree;
	};
});

export default imageMetadata;
