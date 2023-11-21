"use client";

import { Button } from "@/components/ui/button/button";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginBottom: "4rem", textAlign: "center" }}>
      <h4 style={{ marginBottom: 16 }} data-testid="counter-value">
        {count}
      </h4>
      <Button
        data-testid="increment-counter"
        onClick={() => setCount((prev) => prev + 1)}
        variant={"outline"}
      >
        +
      </Button>
      <Button
        data-testid="decrement-counter"
        onClick={() => setCount((prev) => prev - 1)}
        style={{ marginInline: 16 }}
        variant={"outline"}
      >
        -
      </Button>
      <Button variant={"destructive"} onClick={() => setCount(0)}>
        reset
      </Button>
    </div>
  );
};

export default Counter;
