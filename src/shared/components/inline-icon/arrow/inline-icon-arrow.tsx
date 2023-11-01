import React, { forwardRef } from 'react'

import { InlineIcon, IconProps } from '../inline-icon'

export const InlineIconArrow = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <InlineIcon {...props} ref={ref} viewBox="0 0 32 32">
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21.332 26.667 10.665 16 21.332 5.333"
      />
    </InlineIcon>
  )
})

InlineIconArrow.displayName = 'InlineIconArrow'
