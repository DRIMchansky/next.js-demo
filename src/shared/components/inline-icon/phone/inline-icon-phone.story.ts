import type { Meta, StoryObj } from '@storybook/react'

import { InlineIconPhone } from '.'

const meta: Meta<typeof InlineIconPhone> = {
  title: 'Icons/InlineIconPhone',
  component: InlineIconPhone,
  argTypes: {
    color: { control: { type: 'color' } }
  },
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof InlineIconPhone>

export const Base: Story = {}
