import * as React from "react";

import { PostEditorContext } from "./PostEditor";
import { Switch } from "~/components/Switch";

export function PreviewSwitch() {
	const context = React.useContext(PostEditorContext);
	const { isPreviewing, setIsPreviewing } = context;

	return (
		<Switch
			label={"Preview"}
			defaultEnabled={isPreviewing}
			onChange={(val: boolean) => setIsPreviewing(val)}
		/>
	);
}
