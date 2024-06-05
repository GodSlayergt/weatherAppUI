import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Carousel from './Carousel';
import { mockData } from './mockData';

describe('Carousel Component', () => {

 
  // Test case for rendering the Carousel component
  test('renders Carousel component', () => {
    render(<Carousel />);
    const carouselContainer = screen.getByTestId('carousel-container');
    expect(carouselContainer).toBeInTheDocument();
  });

  // Test case for input field and fetching data
  test('fetches data on input change', async () => {
    render(<Carousel />);
    const input = screen.getByPlaceholderText('City');
    fireEvent.change(input, { target: { value: 'Toronto' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
    const mockfetch = jest.fn()
    global.fetch= mockfetch
    mockfetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockData),
      });
    await waitFor(() => {
      const carouselSlide = screen.getByTestId('carousel-slide');
      expect(carouselSlide).toBeInTheDocument();
    });
  });

});
