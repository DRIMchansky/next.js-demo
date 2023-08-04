import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '.'

const meta: Meta<typeof Header> = {
  title: 'Sections/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof Header>

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
}

export const TabletPortrait: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tabletPortrait'
    }
  }
}

export const TabletLandscape: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tabletLandscape'
    }
  }
}

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
