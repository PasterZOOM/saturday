import { ComponentPropsWithoutRef, ElementType } from 'react'

import classnames from 'classnames'

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
  const { variant = 'primary', fullWidth, className, as: Component = 'button', ...rest } = props

  return (
    <Component
      className={classnames(s[variant], { [s.fullWidth]: fullWidth }, className)}
      {...rest}
    />
  )
}
