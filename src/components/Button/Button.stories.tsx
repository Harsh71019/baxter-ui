// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'The visual style of the button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Cancel',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Submit',
    variant: 'secondary',
  },
};

export const CustomClass: Story = {
  args: {
    children: 'Custom Button',
    className: 'bx-bg-blue-500 bx-text-white',
  },
};
