import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import DrillDownPieChart1 from '../components/DrillDownPieChart1';
import 'resize-observer-polyfill';


jest.mock('axios');

describe('DrillDownPieChart1', () => {

  test('renders without error', () => {
    render(<DrillDownPieChart1 />);
  });

  // test('fetches data on slice click', async () => {
  //   axios.get.mockResolvedValueOnce({ data: [] });

  //   render(<DrillDownPieChart1 />);
  // });
});
