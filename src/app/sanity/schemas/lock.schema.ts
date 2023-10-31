import { getExtension, getImageDimensions } from '@sanity/asset-utils'
import { SanityAsset } from '@sanity/image-url/lib/types/types'
import { defineType } from 'sanity'

const IMAGE_SIZE = 1000

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
      description: `В формате .png, ${IMAGE_SIZE}x${IMAGE_SIZE}px`,
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
          if (width < IMAGE_SIZE || height < IMAGE_SIZE) {
            return `Image must be ${IMAGE_SIZE}x${IMAGE_SIZE} pixels`
          }

          return true
        })
    }
  ]
})
