import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  FC,
  forwardRef,
  memo,
  RefObject,
  useCallback,
  useMemo,
  useRef,
} from 'react'

import classnames from 'classnames'
import { v1 } from 'uuid'

import s from './input.module.scss'

import { CloseIcon } from '@/components/ui/input/icons/closeIcon.tsx'
import { EyeOffOutlineIcon } from '@/components/ui/input/icons/eyeOffOutlineIcon.tsx'
import { EyeOutlineIcon } from '@/components/ui/input/icons/eyeOutlineIcon.tsx'
import { SearchIcon } from '@/components/ui/input/icons/searchIcon.tsx'
import { useSwitcher } from '@/hooks/useSwitcher.ts'

export type InputType = 'text' | 'password' | 'search'

export type PropsType<T extends InputType> = {
  label?: string
  error?: string
  type?: T
  onChange?: (value: string) => void
}

export const Input = memo(
  forwardRef<
    HTMLInputElement,
    PropsType<InputType> & Omit<ComponentPropsWithoutRef<'input'>, keyof PropsType<InputType>>
  >((props, r) => {
    const {
      label,
      name,
      type = 'text',
      className,
      value,
      id,
      error,
      disabled,
      onChange,
      ...rest
    } = props

    const innerRef = useRef<HTMLInputElement>(null)
    const innerId = useMemo(() => v1(), [])

    const ref = (r as RefObject<HTMLInputElement>) ?? innerRef
    const _id = id ?? innerId

    const isTypeSearch = type === 'search'
    const isTypePassword = type === 'password'

    const { switcher: isViewPassword, toggle: toggleViewPassword } = useSwitcher()

    const onPasswordIconClick = () => {
      ref.current?.focus()
      toggleViewPassword()
      const start = ref?.current?.selectionStart ?? 0
      const end = ref.current?.selectionEnd ?? 0

      requestAnimationFrame(() => {
        ref.current?.setSelectionRange(start, end)
      })
    }

    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = e => {
      onChange?.(e.currentTarget.value)
    }

    const onSearchIconClick = useCallback(() => {
      ref.current?.focus()
    }, [])

    const onClear = useCallback(() => {
      ref.current?.focus()
      onChange?.('')
    }, [])

    return (
      <>
        {label && (
          <label htmlFor={_id} className={s.label}>
            {label}
          </label>
        )}
        <div
          className={classnames(s.wrapper, {
            [s.isLeft]: isTypeSearch,
            [s.isRight]: isTypePassword || (isTypeSearch && value),
            [s.error]: error,
          })}
        >
          <input
            ref={ref}
            className={classnames(s.input, { [s.error]: error }, className)}
            id={_id}
            value={value}
            type={isViewPassword && isTypePassword ? 'text' : type}
            disabled={disabled}
            onChange={onChangeHandler}
            {...rest}
          />
          <div className={s.leftIcon}>
            <LeftIcon isTypeSearch={isTypeSearch} onSearchIconClick={onSearchIconClick} />
          </div>
          <div className={s.rightIcon}>
            <RightIcon
              isViewPassword={isViewPassword}
              isTypePassword={isTypePassword}
              value={value}
              onClear={onClear}
              onPasswordIconClick={onPasswordIconClick}
              isTypeSearch={isTypeSearch}
            />
          </div>
          {error && <div className={classnames(s.error, s.errorMessage)}>{error}</div>}
        </div>
      </>
    )
  })
)

type LeftIconPropsType = { isTypeSearch: boolean; onSearchIconClick: () => void }

const LeftIcon: FC<LeftIconPropsType> = memo(({ isTypeSearch, onSearchIconClick }) => {
  if (isTypeSearch) {
    return <SearchIcon onClick={onSearchIconClick} />
  }

  return null
})

type RightIconPropsType = {
  isViewPassword: boolean
  isTypeSearch: boolean
  isTypePassword: boolean
  value: string | number | readonly string[] | undefined
  onClear: () => void
  onPasswordIconClick: () => void
}

const RightIcon: FC<RightIconPropsType> = memo(
  ({ isViewPassword, isTypePassword, isTypeSearch, value, onClear, onPasswordIconClick }) => {
    if (isTypePassword) {
      return isViewPassword ? (
        <EyeOutlineIcon onClick={onPasswordIconClick} />
      ) : (
        <EyeOffOutlineIcon onClick={onPasswordIconClick} />
      )
    }

    if (isTypeSearch && value) {
      return <CloseIcon onClick={onClear} />
    }

    return null
  }
)
