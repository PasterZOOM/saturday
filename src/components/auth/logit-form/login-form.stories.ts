import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './login-form.tsx'

const meta = {
  title: 'Components/Login-form',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LoginForm>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
