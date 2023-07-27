import React from 'react'
import clsx from 'clsx'

type Props = {
  id: string
  className?: string
}

export const Icon = ({ id, className }: Props) => {
  return (
    <svg className={clsx(className)} height={24} width={24} aria-hidden="true">
      <use href={`/assets/icons.svg#${id}`} />
    </svg>
  )
}
