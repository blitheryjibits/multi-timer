import { useState } from 'react'

import './App.css'
import { TimerContainer } from './components/TimerContainer'

function App() {
  const [currentTimer, setCurrentTimer] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const timers = [
    {id:0, title:"Presentation", duration: 63},
    {id:1, title:"Discussion", duration: 70},
    {id:2, title:"Conversation", duration: 70}
  ]

  const startTimer = () => {
    setIsRunning(true);
  }

  const pauseTimer = () => {
    setIsRunning(false);
  }

  const nextTimer = () => {
    setCurrentTimer((prev) => (prev+1)%timers.length);
  }

  const prevTimer = () => {
    setCurrentTimer((prev) => (prev-1)%timers.length);
  }

  const onComplete = () => {
    pauseTimer()
      if (currentTimer < timers.length) nextTimer()
  }

  return (
    <>
      <div className="app-container">
          <TimerContainer 
            timers={timers} 
            isRunning={isRunning} 
            onComplete={onComplete}
            currentTimer={currentTimer}
            />

        <div className="button-container">
          <button type="button" className="button" onClick={startTimer}>Start</button>
          <button type="button" className="button" onClick={pauseTimer}>Pause</button>
          <button type="button" className="button" onClick={nextTimer}>Next</button>
          <button type="button" className="button" onClick={prevTimer}>Prev</button>
        </div>
      </div>

    </>
  )
}

export default App
