import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['text', 'password', 'search'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
    error: { control: { type: 'text' } },
  },
} satisfies Meta<typeof Input>

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
  render: props => {
    const [value, setValue] = useState('')

    return <Input {...props} value={value} onChange={setValue} disabled={false} />
  },
  args: {
    ...Default.args,
    placeholder: 'Search',
    type: 'search',
    label: 'Search',
  },
}
