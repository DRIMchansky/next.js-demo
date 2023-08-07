import { defineType } from 'sanity'

export const general = defineType({
  name: 'general',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Название'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Описание'
    }
  ]
})
