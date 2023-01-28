import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'ecommerce',

  projectId: 't1jn10xi',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  parts: [
    {
      name: 'product',
      path: '/products/:slug',
      schema: {
        title: 'Product',
        type: 'object',
        fields: [
          {
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime',
          },
          // other fields
        ],
      },
    },
  ],
  listItem: {
    defaultProps: {
      options: {
        orderings: [
          {
            title: 'Created At - Newest',
            name: 'createdAtDesc',
            by: [{field: 'createdAt', direction: 'desc'}],
          },
          {
            title: 'Created At - Oldest',
            name: 'createdAtAsc',
            by: [{field: 'createdAt', direction: 'asc'}],
          },
        ],
      },
    },
  },
})
