import { defineType } from 'sanity'

export const lock = defineType({
  name: 'lock',
  type: 'document',
  title: 'Замки',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Название'
    }
  ]
})
