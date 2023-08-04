import type { Meta, StoryObj } from '@storybook/react'

import { InlineIconMenuOpen } from '.'

const meta: Meta<typeof InlineIconMenuOpen> = {
  title: 'Icons/InlineIconMenuOpen',
  component: InlineIconMenuOpen,
  argTypes: {
    color: { control: { type: 'color' } }
  },
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof InlineIconMenuOpen>

export const Base: Story = {}
