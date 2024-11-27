// scripts/templates.js
export const componentTemplate = name => `import React from 'react';
import styles from './${name}.module.scss';

export interface ${name}Props {
  children?: React.ReactNode;
}

export const ${name}: React.FC<${name}Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

${name}.displayName = '${name}';
`;

export const styleTemplate = name => `.container {
  // Add your styles here
}
`;

export const storyTemplate = name => `import type { Meta, StoryObj } from '@storybook/react';
import { ${name} } from './${name}';

const meta: Meta<typeof ${name}> = {
  title: 'Components/${name}',
  component: ${name},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ${name}>;

export const Default: Story = {
  args: {
    children: '${name} Content',
  },
};
`;

export const testTemplate = name => `import React from 'react';
import { render, screen } from '@testing-library/react';
import { ${name} } from './${name}';

describe('${name}', () => {
  it('renders correctly', () => {
    render(<${name}>Test Content</${name}>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
`;

export const indexTemplate = name => `export * from './${name}';
`;
