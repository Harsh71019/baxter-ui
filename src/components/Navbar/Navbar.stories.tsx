import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    navItems: [
      { label: 'Clinical', isActive: true },
      { label: 'Customer Service' },
      { label: 'Patient Administration' },
      { label: 'Adequest' },
      {
        label: 'More',
        hasDropdown: true,
        dropdownItems: [
          {
            label: 'Reports',
            onClick: () => console.log('Clicked Reports'),
          },
          {
            label: 'Clinic Settings',
            onClick: () => console.log('Clicked Clinic Settings'),
          },
          {
            label: 'Users',
            onClick: () => console.log('Clicked Users'),
          },
        ],
      },
    ],
    onNavItemClick: item => console.log('Clicked nav item:', item),
    onHelpClick: () => console.log('Clicked help'),
    onManualClick: () => console.log('Clicked manual'),
  },
};

// Usage example with different items:
export const CustomNav: Story = {
  args: {
    navItems: [
      { label: 'Home', isActive: true },
      { label: 'Products' },
      {
        label: 'Settings',
        hasDropdown: true,
        dropdownItems: [
          {
            label: 'Profile',
            onClick: () => console.log('Clicked Profile'),
          },
          {
            label: 'Preferences',
            onClick: () => console.log('Clicked Preferences'),
          },
        ],
      },
    ],
    onNavItemClick: item => console.log('Clicked:', item),
    onHelpClick: () => console.log('Help clicked'),
    onManualClick: () => console.log('Manual clicked'),
  },
};
