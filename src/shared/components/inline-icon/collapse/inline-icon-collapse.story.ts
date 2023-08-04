import type { Meta, StoryObj } from '@storybook/react'

import { InlineIconCollapse } from '.'

const meta: Meta<typeof InlineIconCollapse> = {
  title: 'Icons/InlineIconCollapse',
  component: InlineIconCollapse,
  argTypes: {
    color: { control: { type: 'color' } }
  },
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof InlineIconCollapse>

export const Base: Story = {}
