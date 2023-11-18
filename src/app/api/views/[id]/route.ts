import { NextRequest, NextResponse } from 'next/server'

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

        const newOrUpdatedViews = await prisma.pageView.upsert({
            where: { id },
            create: {
                id,
            },
            update: {
                viewCount: {
                    increment: 1,
                },
            },
        })

        return NextResponse.json({
            status: 200,
            total: newOrUpdatedViews.viewCount.toString(),
        })
    } catch (e) {
        console.log(`${e}`)
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

        return NextResponse.json({ total: views?.viewCount.toString() || null })
    } catch (e) {
        console.log(`${e}`)
        return new Response(`Failed to increment page`, {
            status: 500,
        })
    }
}
