import React, { forwardRef } from 'react'

import { InlineIcon, IconProps } from '..'

export const InlineIconHeart = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <InlineIcon {...props} ref={ref}>
      <path
        d="M8.0625 3.75C5.68114 3.75 3.75 5.7071 3.75 8.12168C3.75 10.0708 4.50469 14.6969 11.9334 19.3732C12.0665 19.4562 12.2192 19.5 12.375 19.5C12.5308 19.5 12.6835 19.4562 12.8166 19.3732C20.2453 14.6969 21 10.0708 21 8.12168C21 5.7071 19.0689 3.75 16.6875 3.75C14.3061 3.75 12.375 6.3995 12.375 6.3995C12.375 6.3995 10.4439 3.75 8.0625 3.75Z"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </InlineIcon>
  )
})

InlineIconHeart.displayName = 'InlineIconHeart'
