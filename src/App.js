import Home from "./Home";
import Astana from "./astana";
import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  return (
    <div className="App">
      <h1>
        {num}{' '}
        {num === 99
          ? 'max'
          : num === 0
          ? 'min'
          : num === 10
          ? 'Hello'
          : ''}
      </h1>

      <button onClick={() => {
        if (num < 99) setNum(num + 1);
      }}>+</button>

      <button onClick={() => {
        if (num > 0) setNum(num - 1);
      }}>-</button>

      <button onClick={() => {
        setNum(0);
      }}>reset</button>

      <button onClick={() => {
        setNum(99);
      }}>max</button>

      <button onClick={() => {
        if (num < 95) setNum(num + 5);
        else if (num < 99) setNum(99);
      }}>+5</button>

      <button onClick={() => {
        if (num >= 5) setNum(num - 5);
        else if (num > 0) setNum(0);
      }}>-5</button>

      
    </div>
  );
}

export default App;







