import React, { LegacyRef } from 'react'
import clsx from 'clsx'

export type IconProps = React.SVGAttributes<SVGSVGElement> & {
  className?: string
  ref?: LegacyRef<SVGSVGElement>
}

export const InlineIcon = ({ className, ref, viewBox, height, width, ...props }: IconProps) => {
  return (
    <svg
      {...props}
      className={clsx(className)}
      aria-hidden="true"
      viewBox={viewBox || '0 0 24 24'}
      width={width || 24}
      height={height || 24}
      fill="none"
      ref={ref}
    />
  )
}
