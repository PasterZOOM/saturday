import { ComponentPropsWithoutRef, FC, useRef } from 'react'

import { v1 } from 'uuid'

import { Typography } from '../typography'

import s from './input.module.scss'

export type PropsType = {
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const Input: FC<PropsType> = ({
  label,
  name,
  type = 'text',
  className = '',
  value,
  id,
  ...rest
}) => {
  const ref = useRef<HTMLInputElement | null>(null)
  const _id = v1()

  return (
    <div className={s.main}>
      {label && (
        <Typography variant={'body1'} as={'label'} htmlFor={id ?? _id} className={s.label}>
          {label}
        </Typography>
      )}
      <Typography
        variant={'body1'}
        className={`${s.input} ${s[type]} ${value && s.notEmpty} ${className}`}
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && ref?.current?.focus()}
        onClick={() => ref?.current?.focus()}
        onMouseDown={e => e.preventDefault()}
      >
        <input ref={ref} id={id ?? _id} value={value} type={type} {...rest} tabIndex={-1} />
      </Typography>
    </div>
  )
}
