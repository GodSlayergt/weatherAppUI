import React from "react";
import { render, screen } from "@testing-library/react";
import { Body } from "./Body";
import { mockData } from "../Carousel/mockData";

describe("Body", () => {
  test("render body", async () => {
    render(<Body data={mockData.data.today[0]} />);
    expect(screen.getByTestId("prediction").textContent).toBe('Hot')
    expect(screen.getByText('39')).toBeInTheDocument()
  });
});
