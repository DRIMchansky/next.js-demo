import type { Meta, StoryObj } from '@storybook/react'

import { InlineIconCart } from '.'

const meta: Meta<typeof InlineIconCart> = {
  title: 'Icons/InlineIconCart',
  component: InlineIconCart,
  argTypes: {
    color: { control: { type: 'color' } }
  },
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof InlineIconCart>

export const Base: Story = {}
