import React, { forwardRef } from 'react'

import { InlineIcon, IconProps } from '../inline-icon'

export const InlineIconCollapse = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <InlineIcon {...props} ref={ref}>
      <path
        d="M7.33325 10.25L11.9999 14.9167L16.6666 10.25"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </InlineIcon>
  )
})

InlineIconCollapse.displayName = 'InlineIconCollapse'
