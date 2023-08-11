import { useState } from "react";

type Props = {
  initialCounter?: number;
};

export default function useCounter({ initialCounter = 0 }: Props = {}) {
  const [counter, setCounter] = useState(initialCounter);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  const reset = () => {
    if (counter === 0) {
      alert("Ops, o contador já está zerado!");
      return;
    }

    setCounter(0);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
}
