import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [display, setDisplay] = useState("false")
  let displayToggle

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>{display}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1

        )}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

        {/* <h1> toggle is {display}</h1> */}
        <button onClick={() => { 

          if(display === 'false') {
            setDisplay('true')
            displayToggle = 'True'
            console.log(display)
          }
          else{
            setDisplay('false')
            displayToggle = 'false'
            console.log(display)
          }
        }}>
          Display
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
