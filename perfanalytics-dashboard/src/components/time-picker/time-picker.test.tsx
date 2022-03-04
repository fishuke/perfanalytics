import React from 'react';
import { render, screen } from '@testing-library/react';
import TimePickerComponent from "./time-picker";

test('renders Time Picker', () => {
  render(<TimePickerComponent label='Start Time' onUpdate={(() => console.log('Time picker updated!'))} value={new Date()} />);
  const table = screen.getByTestId("time-picker");
  expect(table).toBeInTheDocument();
});