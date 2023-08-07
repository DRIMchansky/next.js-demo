import { apiVersion, dataset, projectId } from './sanity/env'
import { schemaTypes } from './sanity/schemas'
import { visionTool } from '@sanity/vision'
import { deskTool } from 'sanity/desk'
import { defineConfig } from 'sanity'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['general'])

export default defineConfig({
  title: 'CMS',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    deskTool({
      structure: S =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Общее').id('general').child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType('general').documentId('general')
            ),

            // Regular document types
            S.documentTypeListItem('lock').title('Замок')
          ])
    }),
    visionTool({ defaultApiVersion: apiVersion })
  ],

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: templates => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType))
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input
  }
})
