import React from 'react';
import { render, screen } from '@testing-library/react';
import { HourlyForecast, HourlyForecastMap } from './HourlyForecast';

describe('HourlyForecast Component', () => {
  test('renders hourly forecast correctly', () => {
    const data = {
      date: '2022-06-01 12:00:00',
      icon: '01d',
      temp: '25.5'
    };

    render(<HourlyForecast data={data} />);

    const timeElement = screen.getByText('12:00');
    expect(timeElement).toBeInTheDocument();

    const tempElement = screen.getByText('26°');
    expect(tempElement).toBeInTheDocument();

    const iconElement = screen.getByAltText('Weather Icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute('src', 'https://openweathermap.org/img/wn/01d@2x.png');
  });
});

describe('HourlyForecastMap Component', () => {
  test('renders hourly forecast map correctly', () => {
    const weatherData = [
      { date: '2022-06-01 12:00:00', icon: '01d', temp: '25.5' },
      { date: '2022-06-01 15:00:00', icon: '02d', temp: '28.3' },
      { date: '2022-06-01 18:00:00', icon: '03d', temp: '22.7' }
    ];

    render(<HourlyForecastMap weatherData={weatherData} />);

    const forecastElements = screen.getAllByTestId('hourly-forecast');
    expect(forecastElements.length).toBe(weatherData.length);
  });
});
