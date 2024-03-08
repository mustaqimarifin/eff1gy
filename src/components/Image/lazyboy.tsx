import NextImage from "next/image";
import { Suspense, cache, memo } from "react";

import { Fade } from "./fade";

const GhostImage = (props) => {
	return (
		<Suspense>
			<Fade>
				<NextImage {...props} className="rounded-lg" />
			</Fade>
		</Suspense>
	);
};

export default cache(GhostImage);
