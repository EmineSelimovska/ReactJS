import { useState, useEffect } from 'react';
import './App.css'


function App() {

  let [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Mount components');
  }, [])

  useEffect(() => {
    console.log('Update components - numbers');
  }, [numbers, count])


  useEffect(() => {


    setTimeout(() => setCount(s => s + 1), 1000);


  }, [count])

  const onClick = () => {
    setNumbers(oldState => oldState.slice(0, oldState.length - 1));

  }

  if (!numbers.length) {
    return null;
  }
  return (

    <div>
      <h3>Count: {count}</h3>
      <ul>
        {numbers.map((number, index) => <li data-key={index} key={index}>{number * 2}</li>)}
      </ul>
      <button onClick={onClick}>Remove</button>
      <button onClick={() => setCount(c => c + 1)}>+</button>

    </div>
  )
}



export default App
