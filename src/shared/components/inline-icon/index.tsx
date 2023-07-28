import React, { LegacyRef } from 'react'
import clsx from 'clsx'

export type IconProps = React.SVGAttributes<SVGSVGElement> & {
  className?: string
  ref?: LegacyRef<SVGSVGElement>
}

export const InlineIcon = ({ className, ref, ...props }: IconProps) => {
  return (
    <svg
      {...props}
      className={clsx(className)}
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
      ref={ref}
    />
  )
}
