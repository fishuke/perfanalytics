import React from 'react';
import { render, screen } from '@testing-library/react';
import Chart from "./chart";
import dummyData from "../../shared/dummyData";

test('renders chart', () => {
  jest.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(100);
  jest.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(100);
  render(<Chart data={dummyData()} dataKey='domLoad' title='Dom Load'/>);
  const charts = screen.getByTestId("chart");
  expect(charts).toBeInTheDocument();
});

