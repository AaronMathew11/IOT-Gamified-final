import React from 'react'
import Pong from '../../Components/pong-part'
import About from '../../Components/about'
import Mobile from '../../Components/mobile'


function Home() {
  return (
    <div>
    <Pong />
      <About />
      <Mobile />
    </div>
  )
}

export default Home;