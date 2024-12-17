import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tabs, { TabItem } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    tabs: {
      control: 'object',
      description: 'Array of tab items with text, components, and optional behaviors.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const exampleTabs: TabItem[] = [
  { text: 'Tab 1', comp: <div>Content for Tab 1</div> },
  { text: 'Tab 2', comp: <div>Content for Tab 2</div> },
  { text: 'Tab 3 (Disabled)', comp: <div>Content for Tab 3</div>, disabled: true },
];


const tabsWithCustomClick: TabItem[] = [
  {
    text: 'Tab 1',
    comp: <div>Custom Click Handler: Tab 1 Content</div>,
    onClick: (index) => alert(`Tab ${index + 1} clicked`),
  },
  {
    text: 'Tab 2',
    comp: <div>Custom Click Handler: Tab 2 Content</div>,
    onClick: (index) => console.log(`Tab ${index + 1} clicked`),
  },
];

const tabsWithIDs: TabItem[] = [
  { text: 'Home', id: 'tab-home', comp: <div>Welcome to Home!</div> },
  { text: 'Profile', id: 'tab-profile', comp: <div>Your Profile Details</div> },
  { text: 'Settings', id: 'tab-settings', comp: <div>Manage Settings</div> },
];

export const Default: Story = {
  args: {
    tabs: exampleTabs,
  },
};

export const DisabledTabs: Story = {
  args: {
    tabs: exampleTabs,
  },
};

export const WithCustomOnClick: Story = {
  args: {
    tabs: tabsWithCustomClick,
  },
};

export const WithIDs: Story = {
  args: {
    tabs: tabsWithIDs,
  },
};
