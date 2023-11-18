'use client'

import * as React from 'react'

import { ListDetailView } from '~/components/Layouts'
import { PostEditor } from '~/components/Writing/Editor/PostEditor'

export default function EditPage({
    params: { slug },
}: {
    params: {
        slug: string
    }
}) {
    return (
        <ListDetailView
            list={null}
            hasDetail
            detail={<PostEditor slug={slug} />}
        />
    )
}
