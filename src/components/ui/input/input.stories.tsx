import { HTMLInputTypeAttribute, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Input, PropsType } from './'

const Wrapper = <T extends HTMLInputTypeAttribute>(props: PropsType<T>) => {
  const [value, setValue] = useState('')

  return <Input value={value} onChange={e => setValue(e.currentTarget.value)} {...props} />
}

const meta = {
  title: 'Components/Input',
  component: Wrapper,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: { type: 'boolean', defaultValue: false } },
    error: { control: { type: 'text' } },
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

export const DefaultWithError: Story = {
  args: {
    ...Default.args,
    value: 'Error',
    error: 'Error',
  },
}

export const Password: Story = {
  args: {
    ...Default.args,
    type: 'password',
    placeholder: 'Enter your password',
    label: 'Password',
  },
}
export const Search: Story = {
  args: {
    ...Default.args,
  },
}
