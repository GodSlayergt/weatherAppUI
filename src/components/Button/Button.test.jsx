import React from "react";
import { fireEvent, render} from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("render Button", async () => {
    const mock = jest.fn()
    const component = render(<Button onClick={mock}>test</Button>);
    fireEvent.click(component.getByText('test'))
    expect(mock).toHaveBeenCalled();
  });
});
