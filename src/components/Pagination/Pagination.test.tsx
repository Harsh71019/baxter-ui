import React from 'react';
import { render, screen } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  it('renders correctly', () => {
    render(<Pagination>Test Content</Pagination>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
