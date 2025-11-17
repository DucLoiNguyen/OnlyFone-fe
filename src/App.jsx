import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

// http://localhost:8080/api/persons

function App() {
  const [count, setCount] = useState(0)
  const [str, setStr] = useState([])

    useEffect(() => {
    axios
      .get("https://onlyfone-be-production.up.railway.app/api/persons")
      .then((res) => {
        setStr(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{str.length > 0 ? str[0].name : ''}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {count > 0 ? 'ăn đb ăn c' : 'count is' } {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
