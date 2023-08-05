import type { Meta, StoryObj } from '@storybook/react'

import { Hamburger } from '.'

const meta: Meta<typeof Hamburger> = {
  title: 'Features/Hamburger',
  component: Hamburger
}

export default meta
type Story = StoryObj<typeof Hamburger>

export const MobilePortrait: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobilePortrait'
    }
  }
}

export const MobileLandscape: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobileLandscape'
    }
  }
}
