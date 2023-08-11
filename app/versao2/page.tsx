"use client";
import useCounter from "@/hooks/useCounter";
import { useState } from "react";

export default function Page() {
  const { counter, increment, reset } = useCounter({
    initialCounter: 10,
  });

  const buttonClasses = "bg-green-400 mx-3 px-3 py-1 rounded";
  return (
    <div className="p-6 text-center space-y-6">
      <button onClick={increment} className="text-2xl">
        {counter}
      </button>

      <div>
        <button className={buttonClasses} onClick={reset}>
          reset
        </button>
      </div>
    </div>
  );
}
