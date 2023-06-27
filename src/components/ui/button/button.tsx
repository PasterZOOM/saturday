// Это переиспользуемый компонент кнопки, который можно настраивать с помощью разных вариантов и
// также можно отображать как различные элементы HTML с использованием свойства "as".
// У него также есть опция отображения кнопки на всю ширину и принимает любые дополнительные
// свойства, которые поддерживаются указанным элементом HTML.
// Библиотека "classnames" используется для условного применения CSS-классов на основе переданных в
// компонент свойств.

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
