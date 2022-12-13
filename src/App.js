import './App.css'
import React from 'react'
import LogRocket from 'logrocket'
import { useCookies } from 'react-cookie'

function App() {
  const [cookies, setCookie] = useCookies()

  function cookieFunction() {
    setCookie('kaka', 'spinning cat', {
      path: '/',
    })
  }

  function activateLogrocket() {
    alert('Consent to monitoring is approved🧐')
    LogRocket.init('6wxva8/12react')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={process.env.REACT_APP_LINK}
          className="App-logo"
          alt="cdn pic"
        />
      </header>
      <h1>cookies</h1>
      <p>{cookies.kaka}</p>

      <button onClick={cookieFunction}>Set Cookie</button>
      <h1>monitoring/GDPR</h1>
      <button onClick={activateLogrocket}>
        Click this button for GDPR consent
      </button>
    </div>
  )
}

export default App
