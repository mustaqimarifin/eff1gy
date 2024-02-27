import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { cx } from "~/lib/transformers";
type Item = {
	id: string;
	label: string;
};

type SegmentedControlProps = {
	onSetActiveItem: any;
	items: Array<Item>;
	active: string;
};

const SegmentedControl = ({
	onSetActiveItem,
	items,
	active,
}: SegmentedControlProps): JSX.Element => {
	const [activeItem, setActiveitem] = useState(active);
	const [parent] = useAutoAnimate();

	function onChange(i) {
		setActiveitem(items[i].id);
		onSetActiveItem(items[i].id);
	}

	return (
		<ol
			ref={parent}
			className={`flex list-none rounded-md bg-black bg-opacity-5 p-1 dark:bg-white dark:bg-opacity-5`}
		>
			{items.map((item, i) => {
				const isActive = items[i].id === activeItem;
				return (
					<li
						className={cx(
							isActive ? { scale: 0.95 } : { opacity: 0.6 },
							"relative flex-1 leading-none",
						)}
						key={item.id}
					>
						<button
							onClick={() => onChange(i)}
							type="button"
							className={`relative w-full cursor-pointer bg-transparent px-4 py-1.5 text-xs font-semibold leading-none ${
								isActive
									? `text-black text-opacity-100 dark:text-white`
									: `text-black text-opacity-60 hover:text-opacity-100 dark:text-white`
							}`}
						>
							{isActive && (
								<div className="z-1 absolute top-0 bottom-0 left-0 right-0 rounded bg-white shadow-sm content-none dark:bg-gray-700" />
							)}
							<span className="z-2 relative">{item.label}</span>
						</button>
					</li>
				);
			})}
		</ol>
	);
};

export default SegmentedControl;
