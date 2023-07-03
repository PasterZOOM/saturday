import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { Input, InputType, PropsType } from '@/components/ui/input'

type Props<T extends FieldValues> = Omit<UseControllerProps<T>, 'rules' | 'defaultValue'> &
  Omit<PropsType<InputType>, 'value' | 'onChange' | 'onBlur'>

export const ControlTextField = <T extends FieldValues>({ control, name, ...rest }: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control })

  return <Input errorMessage={error?.message} {...field} {...rest}></Input>
}
