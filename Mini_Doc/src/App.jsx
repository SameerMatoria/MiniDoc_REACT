import React from 'react'
import Background from './components/Background'
import Foreground from './components/ForeGround'


function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background />
      {/* <button onClick={() => (console.log(11))}>click</button> */}
      <Foreground />
     
    </div>
  )
}

export default App