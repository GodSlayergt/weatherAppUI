import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Carousel from "./Carousel";
import { mockData } from "./mockData";

describe("Carousel Component", () => {
  test("renders Carousel component", () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockData),
    });
    render(<Carousel />);
    const carouselContainer = screen.getByTestId("carousel-container");
    expect(carouselContainer).toBeInTheDocument();
  });

  test("fetches data on input change", async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
    });
    render(<Carousel />);
    const inputElement = screen.getByPlaceholderText("City");
    fireEvent.change(inputElement, { target: { value: "Toronto" } });
    const buttonElement = screen.getByText("Go");
    fireEvent.click(buttonElement);

    await waitFor(() => {
      const error = screen.getByText("Error...");
      expect(error).toBeInTheDocument();
    });
  });

});
