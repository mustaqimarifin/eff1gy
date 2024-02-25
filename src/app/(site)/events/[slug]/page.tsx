import { EventDetail } from "~/components/Events/EventDetail";

import type { EventDetailsPost } from "~/data/events";
import allEvents from "~/data/events";

export async function generateStaticParams() {
	const events = allEvents?.map((post) => ({
		slug: post.slug,
	}));
	return events;
}

export default async function Events({ params: { slug } }) {
	const post: EventDetailsPost = allEvents.find((post) => post.slug === slug) || null;
	return <EventDetail post={post} />;
}
