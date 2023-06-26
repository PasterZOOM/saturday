import { FC } from 'react'

import { EyeOffOutline } from '@/components/svg/eyeOffOutline.tsx'
import { EyeOutline } from '@/components/svg/eyeOutline.tsx'

type PropsType = {
  onClick: () => void
  isOpenPassword: boolean
}
export const PasswordIcon: FC<PropsType> = ({ onClick, isOpenPassword }) => {
  return isOpenPassword ? <EyeOutline onClick={onClick} /> : <EyeOffOutline onClick={onClick} />
}
