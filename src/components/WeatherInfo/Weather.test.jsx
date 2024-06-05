import React from 'react';
import { render, screen } from '@testing-library/react';
import { WeatherInfo } from './WeatherInfo';

jest.mock('../Header/Header', () => ({
  Header: ({ city }) => <div data-testid="header">Header - {city}</div>
}));

jest.mock('../Body/Body', () => ({
  Body: () => <div data-testid="body">Body</div>
}));

jest.mock('../HourlyForecast/HourlyForecast', () => ({
  HourlyForecastMap: () => <div data-testid="hourly-forecast-map">Hourly Forecast</div>
}));

describe('WeatherInfo Component', () => {
  const city = 'New York';
  const weatherData = [
    { date: '2022-06-01 12:00:00', temp: 25.5, icon: '01d' },
    { date: '2022-06-01 15:00:00', temp: 28.3, icon: '02d' },
    { date: '2022-06-01 18:00:00', temp: 22.7, icon: '03d' }
  ];

  test('renders WeatherInfo component', () => {
    render(<WeatherInfo city={city} weatherData={weatherData} />);

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent(`Header - ${city}`);

    const bodyElement = screen.getByTestId('body');
    expect(bodyElement).toBeInTheDocument();

    const hourlyForecastMapElement = screen.getByTestId('hourly-forecast-map');
    expect(hourlyForecastMapElement).toBeInTheDocument();
  });

  test('passes correct props to sub-components', () => {
    render(<WeatherInfo city={city} weatherData={weatherData} />);

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toHaveTextContent(`Header - ${city}`);

    const bodyElement = screen.getByTestId('body');
    expect(bodyElement).toBeInTheDocument();

    const hourlyForecastMapElement = screen.getByTestId('hourly-forecast-map');
    expect(hourlyForecastMapElement).toBeInTheDocument();
  });
});
