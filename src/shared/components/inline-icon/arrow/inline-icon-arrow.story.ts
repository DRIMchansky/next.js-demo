import type { Meta, StoryObj } from '@storybook/react'

import { InlineIconArrow } from '.'

const meta: Meta<typeof InlineIconArrow> = {
  title: 'Icons/InlineIconArrow',
  component: InlineIconArrow,
  argTypes: {
    color: { control: { type: 'color' } }
  },
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof InlineIconArrow>

export const Base: Story = {}
