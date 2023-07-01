import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './'

import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)

    return (
      <Card>
        <Input placeholder={'Placeholder'} label={'Input'} />
        <Checkbox onChange={setChecked} checked={checked} label={'Check-box'} />
      </Card>
    )
  },
}
