import { XCircleIcon } from "lucide-react";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const tagVariants = cva(
	"flex-none justify-center flex items-center space-x-2 cursor-pointer self-start border uppercase rounded-full hover:bg-opacity-10 dark:hover:bg-opacity-30 px-3 py-0.5 text-xs font-semibold leading-5 tracking-wide border-opacity-50 dark:border-opacity-10",
	{
		variants: {
			variant: {
				web: "border-purple-200 text-purple-600 dark:text-purple-300 bg-purple-500 bg-opacity-5 dark:bg-opacity-10",
				portfolio:
					"border-green-200 text-green-600 dark:text-green-200  bg-green-500 bg-opacity-5 dark:bg-opacity-10",
				lol: "border-blue-200 text-blue-600 dark:text-blue-200 bg-blue-500 bg-opacity-5 dark:bg-opacity-10",
				software:
					"border-red-200 text-red-600 dark:text-red-200 bg-red-500 bg-opacity-5 dark:bg-opacity-10",
				plugins:
					"border-gray-200 text-gray-600 dark:text-gray-300 bg-gray-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40",
				gear: "border-orange-200 text-orange-600 dark:text-orange-300 bg-orange-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40",
				art: "border-indigo-200 text-indigo-600 dark:text-indigo-300 bg-indigo-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40",
				music:
					"border-pink-200 text-pink-600 dark:text-pink-300 bg-pink-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40",
				__clear_tag_picker:
					"border-gray-200 text-gray-600 dark:text-gray-300 bg-gray-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40",
			},
		},
		defaultVariants: {
			variant: "web",
		},
	},
);

export interface TagProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof tagVariants> {}

function Tag2({ className, variant, ...props }: TagProps) {
	return (
		<span className={`${tagVariants}}`}>
			{variant === "__clear_tag_picker" ? (
				<>
					<XCircleIcon />
					<span>Clear tag</span>
				</>
			) : (
				<div className={cn(tagVariants({ variant }), className)} {...props} />
			)}
		</span>
	);
}

export { Tag2, tagVariants };

export function Tags({ tags }) {
	if (!tags || tags.length === 0) return null;

	return (
		<div className="flex flex-wrap space-x-2">
			{tags.map((tag) => (
				<Tag2 key={tag.variant} variant={tag.variant} />
			))}
		</div>
	);
}

