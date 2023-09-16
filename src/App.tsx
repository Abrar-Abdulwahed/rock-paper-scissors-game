import React from 'react'
import Header from './components/Header'
import Playground from './components/Playground'
import Button from './components/Button'

function App (): JSX.Element {
  return (
    <div className="container">
      <Header />
      <Playground />
      <Button name='result'/>
    </div>
  )
}
export default App
