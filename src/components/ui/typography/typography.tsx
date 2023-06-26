import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './typography.module.scss'

type TypographyVariant =
  | 'large'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline'
  | 'link1'
  | 'link2'
type TopographyColor = 'primary' | 'error' | 'inherit'

export type PropsType<T extends TypographyVariant, U extends ElementType> = {
  variant?: T
  as?: U
  color?: TopographyColor
} & (U extends ElementType
  ? ComponentPropsWithoutRef<U>
  : T extends 'h1'
  ? ComponentPropsWithoutRef<'h1'>
  : T extends 'h2'
  ? ComponentPropsWithoutRef<'h2'>
  : T extends 'h3'
  ? ComponentPropsWithoutRef<'h3'>
  : ComponentPropsWithoutRef<'span'>)

export const Typography = <T extends TypographyVariant, U extends ElementType = 'p'>(
  props: PropsType<T, U>
) => {
  const { variant = 'body1', className = '', color = 'inherit', as, ...rest } = props

  const Component = as
    ? as
    : (() => {
        switch (variant) {
          case 'h1':
            return 'h1'
          case 'h2':
            return 'h2'
          case 'h3':
            return 'h3'
          default:
            return 'span'
        }
      })()

  return <Component className={`${s[variant]} ${className} ${s[color]}`} {...rest} />
}
