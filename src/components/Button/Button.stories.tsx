// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'your-figma-url-here',
    },
    docs: {
      description: {
        component: 'A customizable button component that follows the design system guidelines.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Predefined button styles',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    onClick: {
      action: 'clicked',
      description: 'onClick event handler',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Filter',
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button style with default theme colors from our design system.',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    children: 'Submit',
    variant: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary button style with default theme colors from our design system.',
      },
    },
  },
};

// Example showing how to extend with custom classes while maintaining theme consistency
export const CustomThemeExtension: Story = {
  args: {
    children: 'Custom Theme Button',
    className: 'bx-bg-button-primary-bg bx-text-button-secondary-text',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of extending button styles using theme tokens.',
      },
    },
  },
};

// Example showing button states
export const States: Story = {
  render: () => (
    <div className="bx-flex bx-gap-4">
      <Button variant="primary">Default</Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
      <Button variant="primary" className="bx-opacity-80">
        Hover
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different states of the button component.',
      },
    },
  },
};

// Example showing different sizes (if you add size variants to your theme)
export const Sizes: Story = {
  render: () => (
    <div className="bx-flex bx-gap-4 bx-items-center">
      <Button variant="primary" className="bx-h-[16px] bx-min-w-[60px]">
        Small
      </Button>
      <Button variant="primary">Default</Button>
      <Button variant="primary" className="bx-h-[20px] bx-min-w-[80px]">
        Large
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button size variations using theme spacing.',
      },
    },
  },
};
