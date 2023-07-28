import React, { forwardRef } from 'react'

import { InlineIcon, IconProps } from '..'

export const InlineIconMenuOpen = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <InlineIcon {...props} ref={ref}>
      <path
        d="M23 12.9792H1C0.447998 12.9792 0 12.5312 0 11.9792C0 11.4272 0.447998 10.9792 1 10.9792H23C23.552 10.9792 24 11.4272 24 11.9792C24 12.5312 23.552 12.9792 23 12.9792Z"
        fill="currentcolor"
      />
      <path
        d="M23 5.3125H1C0.447998 5.3125 0 4.8645 0 4.3125C0 3.7605 0.447998 3.3125 1 3.3125H23C23.552 3.3125 24 3.7605 24 4.3125C24 4.8645 23.552 5.3125 23 5.3125Z"
        fill="currentcolor"
      />
      <path
        d="M23 20.6458H1C0.447998 20.6458 0 20.1978 0 19.6458C0 19.0938 0.447998 18.6458 1 18.6458H23C23.552 18.6458 24 19.0938 24 19.6458C24 20.1978 23.552 20.6458 23 20.6458Z"
        fill="currentcolor"
      />
    </InlineIcon>
  )
})

InlineIconMenuOpen.displayName = 'InlineIconMenuOpen'
