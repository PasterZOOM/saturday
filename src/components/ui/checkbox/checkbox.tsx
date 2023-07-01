import { ChangeEventHandler, ComponentPropsWithoutRef, forwardRef, useMemo, useRef } from 'react'

import classnames from 'classnames'
import { v1 } from 'uuid'

import s from './checkbox.module.scss'

import { CheckedIcon } from '@/components/ui/checkbox/icons/checkedIcon.tsx'
import { UncheckedIcon } from '@/components/ui/checkbox/icons/uncheckedIcon.tsx'

export type PropsType = {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
} & Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'onChange'>

export const Checkbox = forwardRef<HTMLInputElement, PropsType>((props, r) => {
  const { label, className, onChange, checked, id, ...rest } = props

  const innerRef = useRef<HTMLInputElement>(null)
  const innerId = useMemo(() => v1(), [])

  const ref = r ?? innerRef
  const _id = id ?? innerId

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    onChange?.(e.currentTarget.checked)
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
    </div>
  )
})
