import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox/checkbox.tsx'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'

export const App = () => {
  const [checked, setChecked] = useState(false)

  const [value, setValue] = useState('')

  return (
    <div>
      <Button>hello</Button>
      <Typography>sdgsdfgdfg</Typography>
      <Input label={'Input'} type={'search'} value={value} onChange={setValue} />
      <Checkbox checked={checked} onChange={setChecked} label={'check-box'} />
    </div>
  )
}
