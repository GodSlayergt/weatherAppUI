import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Input } from "./Input";
import { mockData } from "../Carousel/mockData";


jest.mock("../Button/Button", () => ({
  Button: ({ children, ...props }) => <button {...props}>{children}</button>,
}));

describe("Input Component", () => {
  const setError = jest.fn();
  const setData = jest.fn();
  const updateCity = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the input and button", async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockData),
    });
    render(
      <Input setError={setError} setData={setData} updateCity={updateCity} />
    );

    const inputElement = screen.getByPlaceholderText("City");
    expect(inputElement).toBeInTheDocument();
    await act(async () =>
      fireEvent.change(inputElement, { target: { value: "Toronto" } })
    );

    const buttonElement = screen.getByText("Go");
    expect(buttonElement).toBeInTheDocument();
    await act(async () => fireEvent.click(buttonElement));
    expect(setData).toHaveBeenCalled();
    expect(updateCity).toHaveBeenCalled();
  });

  test("failed fetch call", () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false });
    render(
      <Input setError={setError} setData={setData} updateCity={updateCity} />
    );

    const inputElement = screen.getByPlaceholderText("City");
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: "Toronto" } });

    const buttonElement = screen.getByText("Go");
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(setError).toHaveBeenCalled();
  });
});
