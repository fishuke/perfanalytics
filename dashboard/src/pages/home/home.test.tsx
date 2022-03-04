import React from 'react';
import {render, screen} from '@testing-library/react';
import Home from './home';

describe('home page', () => {
    test('renders Start Time and End Time', () => {
        beforeAll();
        render(<Home/>);

        const container = screen.getByTestId("time-picker-container");
        expect(container).toBeInTheDocument();

        const startTime = screen.getAllByText(/Start Time/i);
        expect(startTime.length).toBeGreaterThan(0);

        const endTime = screen.getAllByText(/End Time/i);
        expect(endTime.length).toBeGreaterThan(0);
    });


    test('renders four chart', () => {
        beforeAll();
        render(<Home/>);
        const charts = screen.getAllByTestId("chart");
        expect(charts.length).toBe(4);
    });
})

function beforeAll() {
    // default beforeAll was not working.
    jest.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(100);
    jest.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(100);
}

