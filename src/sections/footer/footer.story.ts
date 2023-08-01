import type { Meta, StoryObj } from '@storybook/react'

import { Footer } from '.'

const meta: Meta<typeof Footer> = {
  title: 'Sections/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof Footer>

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
