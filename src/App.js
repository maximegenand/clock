import { useEffect, useState, useCallback } from "react";

import "./App.css";
import Clock from "./components/Clock";

function App() {
  const [size, setSize] = useState(8);
  const minSize = 6;
  const interval = 2;

  const changeSize = useCallback(
    (delta) => {
      size + delta >= minSize && setSize(size + delta);
    },
    [size]
  );

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "ArrowUp") changeSize(interval);
      else if (event.key === "ArrowDown") changeSize(-1 * interval);
    };
    document.addEventListener("keydown", keyDownHandler);

    return () => document.removeEventListener("keydown", keyDownHandler);
  }, [changeSize]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="size" style={{ marginBottom: 4 * size }}>
          <button
            disabled={size - interval < minSize}
            onClick={() => changeSize(-1 * interval)}
          >
            -
          </button>
          <div>{size}</div>
          <button onClick={() => changeSize(interval)}>+</button>
        </div>
        <Clock size={size} />
      </header>
    </div>
  );
}

export default App;
