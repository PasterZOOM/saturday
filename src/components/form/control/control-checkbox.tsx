import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { Checkbox, PropsType } from '@/components/ui/checkbox'

type Props<T extends FieldValues> = Omit<UseControllerProps<T>, 'rules' | 'defaultValue'> &
  Omit<PropsType, 'value' | 'onChange' | 'onBlur' | 'checked'>

export const ControlCheckbox = <T extends FieldValues>({ control, name, ...rest }: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control })

  return (
    <Checkbox {...field} {...rest} checked={field.value} errorMessage={error?.message}></Checkbox>
  )
}
