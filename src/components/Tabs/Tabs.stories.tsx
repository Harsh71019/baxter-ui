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
    defaultActiveId: {
      control: 'text',
      description: 'ID of the tab to be active by default.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const exampleTabs: TabItem[] = [
  { text: 'User Infromation', id: 'tab-1', comp: <div>
    Content for Tab 1
  </div> },
  { text: 'Site Access', id: 'tab-2', comp: <div>Content for Tab 2</div> },
  { text: 'Patient Aceess', id: 'tab-3', comp: <div>Content for Tab 3</div>, disabled: true },
];


const tabsWithCustomClick: TabItem[] = [
  {
    text: 'Tab 1',
    id: 'tab-custom-1',
    comp: <div>Custom Click Handler: Tab 1 Content</div>,
    onClick: (id) => alert(`Tab ${id} clicked`),
  },
  {
    text: 'Tab 2',
    id: 'tab-custom-2',
    comp: <div>Custom Click Handler: Tab 2 Content</div>,
    onClick: (id) => console.log(`Tab ${id} clicked`),
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
    defaultActiveId: 'tab-1',
  },
};

export const DisabledTabs: Story = {
  args: {
    tabs: exampleTabs,
    defaultActiveId: 'tab-1',
  },
};

export const WithCustomOnClick: Story = {
  args: {
    tabs: tabsWithCustomClick,
    defaultActiveId: 'tab-custom-1',
  },
};

export const WithIDs: Story = {
  args: {
    tabs: tabsWithIDs,
    defaultActiveId: 'tab-home',
  },
};
