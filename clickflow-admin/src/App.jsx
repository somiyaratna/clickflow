import React from 'react'
import { useState } from 'react'
import './index.css'
import AdminPanel from './component/AdminPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AdminPanel/>
    </>
  )
}

export default App
