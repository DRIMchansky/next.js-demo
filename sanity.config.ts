import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { visionTool } from '@sanity/vision'
import { internationalizedArray } from 'sanity-plugin-internationalized-array'
import { deskTool } from 'sanity/desk'
import { defineConfig } from 'sanity'

import { apiVersion, dataset, projectId } from './src/app/sanity/env'
import { schemaTypes } from './src/app/sanity/schemas'
import { i18n } from '@/app/languages'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['general', 'headers'])

export default defineConfig({
  title: 'CMS',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    internationalizedArray({
      languages: i18n.languages,
      defaultLanguages: [i18n.base],
      fieldTypes: ['string', 'text']
    }),
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
            S.listItem()
              .title('Заголовки')
              .id('headers')
              .child(S.document().schemaType('headers').documentId('headers')),

            // Regular document types
            S.documentTypeListItem('lock').title('Замки')
          ])
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    vercelDeployTool()
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
