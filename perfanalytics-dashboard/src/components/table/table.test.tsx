import React from 'react';
import { render, screen } from '@testing-library/react';
import TableComponent from "./table";

test('renders Table', () => {
  render(<TableComponent data={[dummyData]}/>);
  const table = screen.getByTestId("table");
  expect(table).toBeInTheDocument();
});

const dummyData: Report = {
  domLoad: 0,
  createdAt: 0,
  firstContentfulPaint: 0,
  timeToFirstByte: 0,
  windowLoad: 0,
  resources: [
    {
      name: 'google.com/style.css',
      initiatorType: 'css',
      duration: 100,
      transferSize: 50,
    },
  ],
};