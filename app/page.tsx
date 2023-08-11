"use client";
import useCounter from "@/hooks/useCounter";
import { useState } from "react";

export default function Page() {
  const { counter, increment, decrement, reset } = useCounter();

  const buttonClasses = "bg-green-400 mx-3 px-3 py-1 rounded";
  return (
    <div className="p-6 text-center space-y-6">
      <span className="text-2xl">{counter}</span>

      <div>
        <button className={buttonClasses} onClick={increment}>
          +
        </button>

        <button className={buttonClasses} onClick={decrement}>
          -
        </button>

        <button className={buttonClasses} onClick={reset}>
          reset
        </button>
      </div>
    </div>
  );
}
