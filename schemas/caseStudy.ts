// import coverImage from './coverImage'
import { defineField, defineType } from 'sanity'
import { PlugZapIcon } from 'lucide-react'

export default defineType({
  name: 'case-study',
  icon: PlugZapIcon,
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      description:
        'The excerpt is used in blog feeds, and also for search results',
      type: 'string',

      validation: (Rule: { max: (arg0: number) => any }) => Rule.max(200),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'coverImage',
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'markdown',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      //date: 'date',
      media: 'coverImage',
    },
    prepare({ title, media, author }) {
      const subtitles = [
        author && `by ${author}`,
        //date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return { title, media, subtitle: subtitles.join(' ') }
    },
  },
})
