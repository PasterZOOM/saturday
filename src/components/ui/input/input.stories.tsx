import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Input, PropsType } from './'

const Wrapper = (props: PropsType) => {
  const [value, setValue] = useState('')

  return <Input value={value} onChange={e => setValue(e.currentTarget.value)} {...props} />
}

const meta = {
  title: 'Components/Input',
  component: Wrapper,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: { type: 'boolean', defaultValue: false } },
  },
} satisfies Meta<typeof Wrapper>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Input',
    placeholder: 'Placeholder',
  },
}
export const DefaultDisabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const Password: Story = {
  args: {
    label: 'Input',
  },
}
export const Search: Story = {
  args: {
    label: 'Input',
  },
}
