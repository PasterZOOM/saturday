import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body1',
        'subtitle1',
        'body2',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
      ],
      control: { type: 'radio' },
    },
    color: {
      options: ['inherit', 'primary', 'error'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta

type Story = StoryObj<typeof meta>
const baseArgs = {
  children: `Carosserie Test Zürich 
Stauffacherstrasse 31
8004 Zürich, ZH, CH`,
}

export const Large: Story = {
  args: {
    variant: 'large',
    ...baseArgs,
  },
}

export const H1: Story = {
  args: {
    variant: 'h1',
    ...baseArgs,
  },
}
export const H2: Story = {
  args: {
    variant: 'h2',
    ...baseArgs,
  },
}
export const H3: Story = {
  args: {
    variant: 'h3',
    ...baseArgs,
  },
}

export const Body1: Story = {
  args: {
    variant: 'body1',
    ...baseArgs,
  },
}

export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    ...baseArgs,
  },
}

export const Body2: Story = {
  args: {
    variant: 'body2',
    ...baseArgs,
  },
}

export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    ...baseArgs,
  },
}

export const Caption: Story = {
  args: {
    variant: 'caption',
    ...baseArgs,
  },
}

export const Overline: Story = {
  args: {
    variant: 'overline',
    ...baseArgs,
  },
}

export const Link1: Story = {
  args: {
    variant: 'link1',
    ...baseArgs,
  },
}

export const Link2: Story = {
  args: {
    variant: 'link2',
    ...baseArgs,
  },
}

export const AsLabel: Story = {
  args: {
    variant: 'body1',
    as: 'label',
    ...baseArgs,
  },
}

export const Error: Story = {
  args: {
    variant: 'body1',
    color: 'error',
    ...baseArgs,
  },
}
