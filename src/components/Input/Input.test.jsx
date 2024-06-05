import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Input } from './Input';


jest.mock('../Button/Button', () => ({
  Button: ({ children, ...props }) => <button {...props}>{children}</button>
}));

describe('Input Component', () => {
  const setError = jest.fn();
  const setData = jest.fn();
  const updateCity = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the input and button', () => {
    render(<Input setError={setError} setData={setData} updateCity={updateCity} />);

    const inputElement = screen.getByPlaceholderText('City');
    expect(inputElement).toBeInTheDocument();

    const buttonElement = screen.getByText('Go');
    expect(buttonElement).toBeInTheDocument();
  });

});
