import { useState } from 'react'

export const useSwitcher = (defaultValue = false) => {
  const [switcher, setSwitcher] = useState(defaultValue)

  const on = () => setSwitcher(true)
  const off = () => setSwitcher(false)
  const toggle = () => setSwitcher(prevState => !prevState)

  return { switcher, on, off, toggle }
}
