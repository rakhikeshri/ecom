import "./styles.css";
import {useState, useEffect} from 'react'

export default function App() {
  const [count, setCount] =useState(0)

  useEffect(()=>{
    console.log('hello world')
    console.log(count)
  },[])//dependency array
  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={() => setCount(count+1)}>click</button>
      <button onClick={() => setCount(count-1)}>click</button>
    </div>
  );
}
