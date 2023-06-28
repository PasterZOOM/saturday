import { HTMLInputTypeAttribute, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Input, PropsType } from './'

const Wrapper = <T extends HTMLInputTypeAttribute>(props: PropsType<T>) => {
  const [value, setValue] = useState('')

  return <Input value={value} onChangeValue={(value: string) => setValue(value)} {...props} />
}

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['text', 'password', 'search'],
      control: { type: 'radio' },
    },
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
export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const DefaultWithError: Story = {
  args: {
    ...Default.args,
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
    placeholder: 'Search',
    type: 'search',
    label: 'Search',
  },
}
