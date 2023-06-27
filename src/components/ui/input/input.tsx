import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  HTMLInputTypeAttribute,
  RefObject,
  useRef,
} from 'react'

import { v1 } from 'uuid'

import s from './input.module.scss'

import { CloseIcon } from '@/components/svg/closeIcon.tsx'
import { EyeOffOutlineIcon } from '@/components/svg/eyeOffOutlineIcon.tsx'
import { EyeOutlineIcon } from '@/components/svg/eyeOutlineIcon.tsx'
import { SearchIcon } from '@/components/svg/searchIcon.tsx'
import { useSwitcher } from '@/hooks/useSwitcher.ts'

export type PropsType<T extends HTMLInputTypeAttribute> = {
  label?: string
  error?: string
  type?: T
  onChangeValue?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement>(
  <T extends HTMLInputTypeAttribute>(props: PropsType<T>, r: ForwardedRef<HTMLInputElement>) => {
    const innerId = v1()
    const innerRef = useRef<HTMLInputElement>()

    const {
      label,
      name,
      type = 'text',
      className = '',
      value,
      id,
      error,
      disabled,
      ...rest
    } = props

    const ref = (r as RefObject<HTMLInputElement>) ?? innerRef
    const _id = id ?? innerId

    const isTypeSearch = type === 'search'
    const isTypePassword = type === 'password'

    const thereIsLeftIcon = isTypeSearch
    const thereIsRightIcon = isTypePassword || (isTypeSearch && value)

    const { switcher: isViewPassword, toggle: toggleViewPassword } = useSwitcher()

    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = e => {
      props.onChange?.(e)
      props.onChangeValue?.(e.currentTarget.value)
    }

    const LeftIcon = () => {
      if (isTypeSearch) {
        const onIconClick = () => {
          ref.current?.focus()
        }

        return <SearchIcon onClick={onIconClick} />
      }

      return null
    }

    const RightIcon = () => {
      if (isTypePassword) {
        const onPasswordIconClick = () => {
          ref.current?.focus()
          toggleViewPassword()
          const start = ref.current?.selectionStart ?? 0
          const end = ref.current?.selectionEnd ?? 0

          setTimeout(() => {
            ref.current?.setSelectionRange(start, end)
          }, 0)
        }

        return isViewPassword ? (
          <EyeOutlineIcon onClick={onPasswordIconClick} />
        ) : (
          <EyeOffOutlineIcon onClick={onPasswordIconClick} />
        )
      }

      if (isTypeSearch && value) {
        const onClear = () => {
          ref.current?.focus()
          props.onChangeValue?.('')
        }

        return <CloseIcon onClick={onClear} />
      }

      return null
    }

    return (
      <>
        {label && (
          <label htmlFor={_id} className={s.label}>
            {label}
          </label>
        )}
        <div
          className={`${s.wrapper} ${thereIsLeftIcon ? s.isLeft : ''} ${
            thereIsRightIcon ? s.isRight : ''
          } ${error ? s.error : ''}`}
        >
          <input
            ref={ref}
            className={`${s.input} ${className}`}
            id={_id}
            value={value}
            type={isViewPassword && isTypePassword ? 'text' : type}
            disabled={disabled}
            onChange={onChangeHandler}
            {...rest}
          />
          <div className={s.leftIcon}>
            <LeftIcon />
          </div>
          <div className={s.rightIcon}>
            <RightIcon />
          </div>
          {error && !disabled && <div className={`${s.error} ${s.errorMessage}`}>{error}</div>}
        </div>
      </>
    )
  }
)
