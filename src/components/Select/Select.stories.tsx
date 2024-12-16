import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  args: {
    options: [
      { value: 'select', label: 'Select' },
      { value: 'no', label: 'No' },
      { value: 'type1', label: 'Type 1 – Insulin Dependent' },
      { value: 'type2_non', label: 'Type 2 – Non Insulin Dependent' },
      { value: 'type2', label: 'Type 2 – Insulin Dependent' },
      { value: 'unknown', label: 'Diabetic – Type Unknown' },
      { value: 'undisclosed', label: 'Undisclosed' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    placeholder: 'All',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Diabetic Status',
    placeholder: 'Select',
  },
};

export const Required: Story = {
  args: {
    label: 'Status',
    required: true,
    placeholder: 'Select',
  },
};

export const WithError: Story = {
  args: {
    label: 'Attending Physician',
    required: true,
    error: 'This field is required',
    placeholder: 'Select',
  },
};
