import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

export function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <h1>rendering {count} times!</h1>;
}

