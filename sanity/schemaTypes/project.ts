import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (debe coincidir con el ID del proyecto)',
      type: 'slug',
      description: 'watchit · underevents · castleapp · nonna · bumeran',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    // 💡 CHANGE: from a single 'image' field to an 'images' array
    defineField({
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [{ 
        type: 'image',
        options: {
          hotspot: true, // Permite recortar cada imagen individualmente
        },
      }],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Example: React, Node.js, PostgreSQL',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    }),
    defineField({
      name: 'demoVideoUrl',
      title: 'Demo Video Path',
      type: 'string',
      description: 'Path to video in /public/videos/, e.g. /videos/watchit-demo.mp4',
    }),
  ],
})