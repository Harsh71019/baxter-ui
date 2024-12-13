import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: { control: 'text', description: 'Label for the input field' },
    labelPosition: {
      control: 'radio',
      options: ['top', 'left'],
      description: 'Position of the label relative to the input field',
    },
    required: { control: 'boolean', description: 'Marks the input as required' },
    regex: {
      control: 'text',
      description: 'Regex pattern to validate the input value',
      table: {
        type: { summary: 'RegExp' },
      },
    },
    error: { control: 'text', description: 'Error message for the input' },
    placeholder: { control: 'text', description: 'Placeholder for the input' },
    disabled: { control: 'boolean', description: 'Disables the input field' },
    onChange: { action: 'changed', description: 'Callback when input value changes' },
  },
  args: {
    placeholder: 'Enter text',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const WithLabel: Story = {
  args: {
    label: 'Username',
  },
};
export const Required: Story = {
  args: {
    label: 'Email',
    required: true,
  },
};
export const LabelLeft: Story = {
  args: {
    label: 'Password',
    labelPosition: 'left',
  },
};
export const WithRegexValidation: Story = {
  args: {
    label: 'Phone Number',
    regex: /^[0-9]{10}$/,
  },
};
export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    disabled: true,
  },
};
export const WithError: Story = {
  args: {
    label: 'Name',
    error: 'This field is required',
  },
};
