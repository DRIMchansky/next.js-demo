import type { Meta, StoryObj } from '@storybook/react'

import { Navigation } from '.'
import { mainNavData } from '@/app/data/main-nav'

const meta: Meta<typeof Navigation> = {
  title: 'Features/Navigation',
  component: Navigation,
  args: {
    data: mainNavData,
    path: '/'
  }
}

export default meta
type Story = StoryObj<typeof Navigation>

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  },
  args: {
    isMobileBehaviour: false
  }
}

export const TabletPortrait: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tabletPortrait'
    }
  },
  args: {
    isMobileBehaviour: true
  }
}

export const TabletLandscape: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tabletLandscape'
    }
  },
  args: {
    isMobileBehaviour: false
  }
}

export const MobilePortrait: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobilePortrait'
    }
  },
  args: {
    isMobileBehaviour: true
  }
}

export const MobileLandscape: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobileLandscape'
    }
  },
  args: {
    isMobileBehaviour: true
  }
}
