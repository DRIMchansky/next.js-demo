import { defineType } from 'sanity'

export const lock = defineType({
  name: 'lock',
  type: 'document',
  title: 'Замок',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Название'
    }
  ]
})
