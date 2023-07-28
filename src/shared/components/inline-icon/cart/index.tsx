import React, { forwardRef } from 'react'

import { InlineIcon, IconProps } from '..'

export const InlineIconCart = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <InlineIcon {...props} ref={ref}>
      <path
        d="M5.00003 7H18.79C19.0695 7.00001 19.3458 7.05857 19.6012 7.17191C19.8566 7.28524 20.0854 7.45083 20.2729 7.65801C20.4604 7.86519 20.6024 8.10936 20.6897 8.37478C20.7771 8.64019 20.8078 8.92097 20.78 9.199L20.18 15.199C20.1307 15.6925 19.8997 16.1501 19.532 16.4829C19.1643 16.8157 18.686 17 18.19 17H8.64003C8.1775 17.0002 7.72921 16.8401 7.37148 16.5469C7.01374 16.2537 6.76869 15.8456 6.67803 15.392L5.00003 7Z"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.00003 7L4.19003 3.757C4.13586 3.54075 4.01098 3.34881 3.83524 3.21166C3.65949 3.0745 3.44296 3.00001 3.22003 3H2.00003"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 21H10" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 21H18" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </InlineIcon>
  )
})

InlineIconCart.displayName = 'InlineIconCart'
