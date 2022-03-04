import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './header';

test('renders website title', () => {
  render(<Header />);
  const title = screen.getByText(/PerfAnalytics Dashboard/i);
  expect(title).toBeInTheDocument();
});
