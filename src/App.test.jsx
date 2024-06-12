import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Carousel component', () => {
  render(<App />);
  const carouselElement = screen.getByTestId("carousel-container");
  expect(carouselElement).toBeInTheDocument();
});