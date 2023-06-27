import { ComponentPropsWithoutRef, ElementType } from 'react'

import classnames from 'classnames'

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

const variantComponentMap: Record<string, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  default: 'span',
}

export const Typography = <T extends TypographyVariant, U extends ElementType = 'p'>(
  props: PropsType<T, U>
) => {
  const { variant = 'body1', className, color = 'inherit', as, ...rest } = props

  const Component = as ? as : variantComponentMap[variant] || variantComponentMap.default

  return <Component className={classnames(s[variant], className, s[color])} {...rest} />
}
