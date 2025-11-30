// src/App.jsx
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState('Checking...')

  useEffect(() => {
    // Cek status ke backend
    fetch('/api/status')
      .then(res => res.json())
      .then(data => setStatus(data.message))
      .catch(() => setStatus('Backend Disconnected'))
  }, [])

  return (
    <div style={{ backgroundColor: '#1e1e1e', color: 'white', minHeight: '100vh', padding: '20px', textAlign: 'center' }}>
      <h1>CONTROL PANEL V2 (REACT)</h1>
      <div style={{ border: '1px solid #333', padding: '20px', margin: '20px auto', maxWidth: '400px', borderRadius: '10px' }}>
        <p>Status Backend: <strong>{status}</strong></p>
        <button style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
          COMING SOON: START BOT
        </button>
      </div>
    </div>
  )
}

export default App