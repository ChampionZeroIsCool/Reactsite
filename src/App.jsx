import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
  console.log(props.numberCount)
  const [count, setCount] = useState(props.numberCount)

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  if (count == 10) {
    return (
      <h1>count=10</h1>
    )
  }

  return (
    <>
      <h1 className='text-sky-400'>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  )
}

export default App
