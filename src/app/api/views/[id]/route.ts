import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { prisma } from '~/lib/prisma'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  let id: string | null
  try {
    const { searchParams } = new URL(req.url)
    id = searchParams.get('id')
    if (!id) {
      const url = new URL(req.url)
      id = url.pathname.substring(url.pathname.lastIndexOf('/') + 1)
    }

    //const { refId, type, text, parentId } = args

    const newOrUpdatedViews = await prisma.pageView.upsert({
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

    return NextResponse.json({
      status: 200,
      total: newOrUpdatedViews.counter.toString(),
    })
  } catch (e) {
    //console.log(`${e}`)
    return new Response(`Failed to increment page`, {
      status: 500,
    })
  }
}

export async function GET(req: Request) {
  let id: string | null
  try {
    const { searchParams } = new URL(req.url)
    id = searchParams.get('id')
    if (!id) {
      const url = new URL(req.url)
      id = url.pathname.substring(url.pathname.lastIndexOf('/') + 1)
    }

    const views = await prisma.pageView.findUnique({
      where: {
        id,
      },
    })

    return NextResponse.json({ total: views?.counter.toString() || null })
  } catch (e) {
    //console.log(`${e}`)
    return new Response(`Failed to increment page`, {
      status: 500,
    })
  }
}
