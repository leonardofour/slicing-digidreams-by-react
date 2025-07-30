import { useState } from 'react'
import Navbar from './components/Navbar'
import Headline from './components/Headline'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Headline />
    </>
  )
}

export default App
