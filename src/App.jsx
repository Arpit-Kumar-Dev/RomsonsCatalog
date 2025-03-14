import { useState } from 'react'

import RomsonsCatalog from './RomsonsCatalog'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RomsonsCatalog/>
    </>
  )
}

export default App
