import { ComponentPropsWithoutRef, FC } from 'react'

import classnames from 'classnames'

import s from './card.module.scss'

type PropsType = ComponentPropsWithoutRef<'div'>

export const Card: FC<PropsType> = ({ className, children }) => {
  return <div className={classnames(s.card, className)}>{children}</div>
}
