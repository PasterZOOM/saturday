import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlCheckbox, ControlTextField } from '@/components/form/control'
import { Button } from '@/components/ui/button'

const schema = z.object({
  login: z.string().trim().nonempty('Enter login').min(3, 'Login must be at 3 characters'),
  password: z.string().nonempty('Enter password').min(3, 'Password must be at 3 characters'),
  rememberMe: z.boolean({
    required_error: 'isActive is required',
    invalid_type_error: 'isActive must be a boolean',
  }),
})

type LoginFormType = z.infer<typeof schema>

export const LoginForm: FC = () => {
  const { handleSubmit, control } = useForm<LoginFormType>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  const onSubmit = handleSubmit(data => console.log(data))

  return (
    <form onSubmit={onSubmit}>
      <ControlTextField label={'Login'} name={'login'} control={control} />
      <ControlTextField label={'Password'} name={'password'} control={control} />
      <ControlCheckbox label={'Remember me'} name={'rememberMe'} control={control} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
