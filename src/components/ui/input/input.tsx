import { ComponentPropsWithoutRef, HTMLInputTypeAttribute, useRef } from 'react'

import { v1 } from 'uuid'

import s from './input.module.scss'

import { PasswordIcon } from '@/components/ui/input/passwordIcon.tsx'
import { useSwitcher } from '@/hooks/useSwitcher.ts'

export type PropsType<T extends HTMLInputTypeAttribute> = {
  label?: string
  error?: string
  type?: T
} & ComponentPropsWithoutRef<'input'>

export const Input = <T extends HTMLInputTypeAttribute>(props: PropsType<T>) => {
  const { label, name, type = 'text', className = '', value, id, error, disabled, ...rest } = props
  const _id = v1()

  const ref = useRef<null | HTMLInputElement>(null)

  const { switcher, toggle } = useSwitcher()

  const onPasswordIconClick = () => {
    ref.current?.focus()
    toggle()
  }

  return (
    <>
      {label && (
        <label htmlFor={id ?? _id} className={s.label}>
          {label}
        </label>
      )}
      <div className={s.wrapper}>
        <input
          ref={ref}
          className={`${error ? s.error : ''} ${s.input} ${s[type]} ${
            value && s.notEmpty
          } ${className}`}
          id={id ?? _id}
          value={value}
          type={type}
          disabled={disabled}
          {...rest}
        />
        <div className={s.rightIcon}>
          {type === 'password' && (
            <PasswordIcon isOpenPassword={switcher} onClick={onPasswordIconClick} />
          )}
        </div>
        {error && !disabled && <div className={`${s.error} ${s.errorMessage}`}>{error}</div>}
      </div>
    </>
  )
}
