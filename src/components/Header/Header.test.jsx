import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { mockData } from '../Carousel/mockData';

describe('Header Component', () => {
  test('renders with city and date', () => {
    const city = 'New York';


    render(<Header city={city} data={mockData.data.today[0]} />);

    const locationIcon = screen.getByTestId('location-icon');
    expect(locationIcon).toBeInTheDocument();

    const cityName = screen.getByText(city);
    expect(cityName).toBeInTheDocument();

    const formattedDate = screen.getByText('Saturday, June 1, 2024');
    expect(formattedDate).toBeInTheDocument();
  });
});
