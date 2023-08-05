import type { Preview } from '@storybook/react'
import localFont from 'next/font/local'

import '../src/app/styles/globals.css'
import React from 'react'

import { openSans } from '../src/app/layout'

const customViewports = {
  mobilePortrait: {
    name: 'Mobile Portrait',
    styles: {
      width: '390px',
      height: '844px'
    }
  },
  mobileLandscape: {
    name: 'Mobile Landscape',
    styles: {
      width: '844px',
      height: '390px'
    }
  },
  tabletPortrait: {
    name: 'Tablet Portrait',
    styles: {
      width: '820px',
      height: '1180px'
    }
  },
  tabletLandscape: {
    name: 'Tablet Landscape',
    styles: {
      width: '1180px',
      height: '820px'
    }
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1920px',
      height: '1080px'
    }
  }
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    viewport: { viewports: customViewports }
  },
  decorators: [
    Story => (
      <div className={`${openSans.className}`} aria-atomic>
        <Story />
      </div>
    )
  ]
}

export default preview
