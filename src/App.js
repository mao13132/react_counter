import './App.css';
import { useState } from 'react';

function App() {
  /* let count = 0; */
  const [count, setCount] = useState(0);

  const plusFunct = () => {
    setCount(count + 1);
  };

  const minusFunct = () => {
    setCount(count - 1);
  };


  return (
    <div className="App">
        <div>
          <h2>Счетчик:</h2>
          <h1>{count}</h1>
          <button onClick={minusFunct} className='minus'>- Минус</button>
          <button onClick={plusFunct} className='plus'>+ Плюс</button>
        </div>
    </div>
  );
}

export default App;
