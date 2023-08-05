import type { Meta, StoryObj } from '@storybook/react'

import { InlineIconHeart } from '.'

const meta: Meta<typeof InlineIconHeart> = {
  title: 'Icons/InlineIconHeart',
  component: InlineIconHeart,
  argTypes: {
    color: { control: { type: 'color' } }
  },
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof InlineIconHeart>

export const Base: Story = {}
