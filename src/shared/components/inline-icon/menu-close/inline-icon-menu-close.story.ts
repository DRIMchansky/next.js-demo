import type { Meta, StoryObj } from '@storybook/react'

import { InlineIconMenuClose } from '.'

const meta: Meta<typeof InlineIconMenuClose> = {
  title: 'Icons/InlineIconMenuClose',
  component: InlineIconMenuClose,
  argTypes: {
    color: { control: { type: 'color' } }
  },
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof InlineIconMenuClose>

export const Base: Story = {}
