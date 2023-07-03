import { ChangeEventHandler, ComponentPropsWithoutRef, forwardRef, useMemo, useRef } from 'react'

import classnames from 'classnames'
import { v1 } from 'uuid'

import s from './checkbox.module.scss'

import { CheckedIcon } from '@/components/ui/checkbox/icons/checkedIcon.tsx'
import { UncheckedIcon } from '@/components/ui/checkbox/icons/uncheckedIcon.tsx'

export type PropsType = {
  checked: boolean
  label?: string
  errorMessage?: string
} & Omit<ComponentPropsWithoutRef<'input'>, 'type'>

export const Checkbox = forwardRef<HTMLInputElement, PropsType>((props, r) => {
  const { label, className, onChange, checked, id, errorMessage, ...rest } = props

  const innerRef = useRef<HTMLInputElement>(null)
  const innerId = useMemo(() => v1(), [])

  const ref = r ?? innerRef
  const _id = id ?? innerId

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    onChange?.(e)
  }

  return (
    <div className={s.main}>
      <div className={s.checkbox}>
        <div className={s.icon}>{checked ? <CheckedIcon /> : <UncheckedIcon />}</div>
        <input
          id={_id}
          ref={ref}
          checked={checked}
          {...rest}
          className={classnames(s.input, className)}
          onChange={handleChange}
          type="checkbox"
        />
      </div>
      {label && (
        <label htmlFor={_id} className={s.label}>
          {label}
        </label>
      )}
      {errorMessage && <div className={classnames(s.error, s.errorMessage)}>{errorMessage}</div>}
    </div>
  )
})
