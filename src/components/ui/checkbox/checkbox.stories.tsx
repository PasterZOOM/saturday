import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox, PropsType } from './'

const Wrapper = (props: PropsType) => {
  const [value, setValue] = useState(props.checked ?? false)

  return <Checkbox {...props} checked={value} onChange={setValue} />
}
const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: { type: 'boolean' } },
    label: { control: { type: 'text' } },
  },
} satisfies Meta<typeof Wrapper>

export default meta

type Story = StoryObj<typeof meta>

export const Checked: Story = {
  args: {
    checked: false,
  },
}
export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
}
export const CheckedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
}
export const CheckedWithLabel: Story = {
  args: {
    checked: true,
    label: 'Check-box',
  },
}
export const DisabledWithLabel: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Check-box',
  },
}
