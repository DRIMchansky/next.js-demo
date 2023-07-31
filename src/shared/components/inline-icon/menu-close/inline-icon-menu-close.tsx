import React, { forwardRef } from 'react'

import { InlineIcon, IconProps } from '../inline-icon'

export const InlineIconMenuClose = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <InlineIcon {...props} ref={ref}>
      <path
        d="M20 4L4 20M20 20L4 4L20 20Z"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </InlineIcon>
  )
})

InlineIconMenuClose.displayName = 'InlineIconMenuClose'
