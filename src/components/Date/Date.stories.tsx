import type { Meta, StoryObj } from '@storybook/react';
import { Date } from './Date';

const meta: Meta<typeof Date> = {
  title: 'Components/Date',
  component: Date,
  argTypes: {
    label: { control: 'text', description: 'Label for the date picker' },
    labelPosition: {
      control: 'radio',
      options: ['top', 'left'],
      description: 'Position of the label relative to the date picker',
    },
    required: { control: 'boolean', description: 'Marks the date picker as required' },
    minDate: {
      control: 'date',
      description: 'Minimum date selectable in the date picker',
      table: {
        type: { summary: 'Date' },
      },
    },
    maxDate: {
      control: 'date',
      description: 'Maximum date selectable in the date picker',
      table: {
        type: { summary: 'Date' },
      },
    },
    disabled: { control: 'boolean', description: 'Disables the date picker' },
    error: { control: 'text', description: 'Error message for the date picker' },
    className: { control: 'text', description: 'Additional class names for the date picker' },
    onChange: { action: 'changed', description: 'Callback when the date value changes' },
  },
  args: {
    label: 'Select Date',
    labelPosition: 'top',
  },
};

export default meta;
type Story = StoryObj<typeof Date>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Date of Birth',
  },
};

export const Required: Story = {
  args: {
    label: 'Appointment Date',
    required: true,
  },
};

export const LabelLeft: Story = {
  args: {
    label: 'Event Date',
    labelPosition: 'left',
  },
};


export const Disabled: Story = {
  args: {
    label: 'Disabled Date Picker',
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Select a Date',
    error: 'This field is required',
  },
};
