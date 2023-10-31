import { getExtension, getImageDimensions } from '@sanity/asset-utils'
import { SanityAsset } from '@sanity/image-url/lib/types/types'
import { defineType } from 'sanity'

export const lock = defineType({
  name: 'lock',
  type: 'document',
  title: 'Замки',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Название'
    },
    {
      name: 'name',
      type: 'internationalizedArrayString',
      title: 'Публичное название'
    },
    {
      name: 'description',
      type: 'internationalizedArrayText',
      title: 'Описание'
    },
    {
      name: 'price',
      type: 'number',
      title: 'Обычная цена'
    },
    {
      name: 'priceSale',
      type: 'number',
      title: 'Цена по скидке'
    },
    {
      name: 'isHero',
      type: 'boolean',
      title: 'Вывести в Hero слайдер'
    },
    {
      name: 'poster',
      title: 'Картинка',
      type: 'image',
      description: 'В формате .png, 500x500px',
      fields: [
        {
          name: 'altText',
          type: 'string',
          title: 'Description (alt text)'
        }
      ],
      validation: rule =>
        rule.custom((value: SanityAsset) => {
          if (!value) {
            return true
          }

          const filetype = getExtension(value.asset._ref)
          if (filetype !== 'png') {
            return 'Image must be a PNG'
          }

          const { width, height } = getImageDimensions(value.asset._ref)
          if (width < 500 || height < 500) {
            return 'Image must be 500x500 pixels'
          }

          return true
        })
    }
  ]
})
