import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from './Table';

describe('Table', () => {
  it('renders correctly', () => {
    render(<Table>Test Content</Table>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
