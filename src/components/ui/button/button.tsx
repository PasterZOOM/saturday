import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: ButtonVariant
  fullWidth?: boolean
  className?: string
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    variant = 'primary',
    fullWidth,
    className = '',
    as: Component = 'button',
    ...rest
  } = props

  return (
    <Component
      onMouseDown={e => e.preventDefault()}
      className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    />
  )
}
