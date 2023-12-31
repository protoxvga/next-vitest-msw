import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Counter from "@/app/counter/_components/counter";

describe("Counter component", () => {
  it("Counter default value", () => {
    render(<Counter />);

    const counterResult = screen.getByTestId("counter-value");

    expect(counterResult.textContent).toBe("0");
  });

  it("Counter increment", () => {
    render(<Counter />);

    const counter = screen.getByTestId("counter-value");
    const incrementButton = screen.getByTestId("increment-counter");

    fireEvent.click(incrementButton);

    expect(counter.textContent).toBe("1");
  });

  it("Counter decrement", () => {
    render(<Counter />);

    const counter = screen.getByTestId("counter-value");
    const decrementButton = screen.getByTestId("decrement-counter");

    fireEvent.click(decrementButton);

    expect(counter.textContent).toBe("-1");
  });
});
