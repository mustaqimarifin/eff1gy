"use server";
import { unstable_noStore as noStore } from "next/cache";
import { Suspense, cache } from "react";

import { ViewType } from "~/graphql/typeSlut";

import { db } from "../db";
/* 
const googleAuth = new auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  },
  scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
})

const yt = youtube({
  version: 'v3',
  auth: googleAuth,
})
 */

export async function addView(refId, type) {
	if (!refId || !type) {
		return [];
	}
	noStore();
	switch (type) {
		case ViewType.Event: {
			const results = await db.event.upsert({
				where: { id: refId },
				create: {
					id: refId,
				},
				update: {
					count: {
						increment: 1,
					},
				},
			});

			return results || [];
		}
		case ViewType.Case: {
			const results = await db.case.upsert({
				where: { slug: refId },
				create: {
					slug: refId,
				},
				update: {
					count: {
						increment: 1,
					},
				},
			});

			return results || [];
		}
		case ViewType.Bookmark: {
			const results = await db.bookmark.upsert({
				where: { id: refId },
				create: {
					id: refId,
				},
				update: {
					count: {
						increment: 1,
					},
				},
			});

			return results || [];
		}
		case ViewType.Blog: {
			const results = await db.blog.upsert({
				where: { slug: refId },
				create: {
					slug: refId,
				},
				update: {
					count: {
						increment: 1,
					},
				},
			});

			return results || [];
		}
		case ViewType.Question: {
			const results = await db.question.upsert({
				where: { id: refId },
				create: {
					id: refId,
				},
				update: {
					count: {
						increment: 1,
					},
				},
			});

			return results || [];
		}
		case ViewType.Stack: {
			const results = await db.stack.upsert({
				where: { id: refId },
				create: {
					id: refId,
				},
				update: {
					count: {
						increment: 1,
					},
				},
			});

			return results || [];
		}
		default: {
			return [];
		}
	}
}
/* export const addView = async (id) => {
  noStore()
  const total = await db.pageView.upsert({
    where: { id },
    create: {
      id,
    },
    update: {
      counter: {
        increment: 1,
      },
    },
  })
  if (total?.counter < 1) return null
  else
    return await db.pageView.findUnique({
      where: {
        id,
      },
      select: {
        counter: true,
      },
    })
}
 */
export async function Counter({
	refId,
	type,
}: {
	refId: string;
	type: ViewType;
}) {
	const views = await addView(refId, type);
	const counter = `${views}`;
	return (
		<Suspense>
			<div>{`${counter} - views`}</div>
		</Suspense>
	);
}

export async function HiddenCounter({ refId, type }: { refId: string; type: ViewType }) {
	const views = await addView(refId, type);
	return (
		<Suspense>
			<div className="hidden">{`${views} - views`}</div>
		</Suspense>
	);
}

/* export const getView = async (id) => {
  noStore()
  const total = await db.pageView.findMany({
    where: {
      id,
    },
    select: {
      counter: true,
    },
  })
  return total
} */
/* export const getAkhylaYouTubeSubs = cache(
  async () => {
    const response = await yt.channels.list({
      id: ['UCorhlPuflkGbA2sRylUldbQ'],
      part: ['statistics'],
    })

    const channel = response.data.items![0]
    return Number(channel?.statistics?.subscriberCount).toLocaleString()
  },
  ['youtube-subs'],
  {
    revalidate: 3600,
  }
)
 */
