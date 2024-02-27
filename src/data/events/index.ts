import hsn from "./hsn";
import letape from "./letape";
import manu from "./manu";
import marvel from "./marvel";
import silat from "./silat";
import spartan from "./spartan";
import starwars from "./starwars";
import tokyo from "./tokyo";

type EventVideo = {
	url: string;
	thumbnail: string;
};

export type EventDetail = {
	title: string;
	description: string;
	media?: Array<string> | null;
	orientation?: "landscape";
};

export type EventDetailsPost = {
	slug: string;
	title: string;
	video: EventVideo;
	gallery?: string[] | null;
	logo: string;
	description: string;
	date: string;
	details: Array<EventDetail>;
};

export type EventDetailsPostSummary = {
	slug: string;
	video: EventVideo;
	logo: string;
	gallery?: string[] | null;
	title: string;
	firstDetail: EventDetail;
	detailsCount: number;
	date: string;
};

const allEvents: EventDetailsPost[] = [hsn, spartan, manu, letape, silat, marvel, starwars, tokyo].reverse();

function extractSummary({
	title,
	slug,
	video,
	gallery,
	logo,
	details,
	date,
}: EventDetailsPost): EventDetailsPostSummary {
	return {
		title,
		slug,
		logo,
		video,
		gallery,
		firstDetail: details[1],
		detailsCount: details.length,
		date,
	};
}

export const summaries: EventDetailsPostSummary[] = allEvents.map(extractSummary);

export default allEvents;
