import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tabs, { TabsProps } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    tabs: {
      control: 'object',
      description: 'Array of tab items with text and content components',
    },
  },

};

export default meta;
type Story = StoryObj<typeof Tabs>;

const exampleTabs: TabsProps['tabs'] = [
  { text: 'Tab 1', comp: <div>Content for Tab 1</div> },
  { text: 'Tab 2', comp: <div>Content for Tab 2</div> },
  { text: 'Tab 3', comp: <div>Content for Tab 3</div> },
];

export const Default: Story = {
  args: {
    tabs: exampleTabs,
  },
};
