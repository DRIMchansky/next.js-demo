import type { Meta, StoryObj } from '@storybook/react'

import { ExternalIcon } from '.'

const meta: Meta<typeof ExternalIcon> = {
  title: 'Icons/External',
  component: ExternalIcon,
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof ExternalIcon>

export const Twitter: Story = {
  render: () => <ExternalIcon id="twitter" />
}

export const LinkedIn: Story = {
  render: () => <ExternalIcon id="linkedin" />
}

export const Check: Story = {
  render: () => <ExternalIcon id="check" />
}

export const Gift: Story = {
  render: () => <ExternalIcon id="gift" />
}

export const Facebook: Story = {
  render: () => <ExternalIcon id="facebook" />
}

export const VK: Story = {
  render: () => <ExternalIcon id="vk" />
}
