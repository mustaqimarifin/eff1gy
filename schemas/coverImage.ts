import { ImageIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export default defineType({
	name: "coverImage",
	title: "Cover Image",
	icon: ImageIcon,
	type: "image",
	fields: [
		defineField({
			name: "caption",
			type: "string",
			title: "Image caption",
			description: "Appears below image.",
		}),
		defineField({
			name: "alt",
			type: "string",
			title: "Alternative text",
			description: "Important for SEO and accessiblity.",
		}),
	],
	options: {
		hotspot: true,
	},
});
