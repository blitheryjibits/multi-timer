import { useRef, useState } from 'react'

import './App.css'
import { TimerContainer } from './components/TimerContainer'

function App() {
  const timerContainerRef = useRef<{ resetAll: () => void }>(null)
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

  const reset = () => {
    timerContainerRef.current?.resetAll()
    setCurrentTimer(0);
    setIsRunning(false);
  }

  return (
    <>
      <div className="app-container">
          <TimerContainer 
            ref={timerContainerRef}
            timers={timers} 
            isRunning={isRunning} 
            onComplete={onComplete}
            currentTimer={currentTimer}
            />

        <div className="button-container">
          <button type="button" className="button str" onClick={startTimer}>▶</button>
          <button type="button" className="button stp" onClick={pauseTimer}>◼</button>
          <button type="button" className="button prv" onClick={prevTimer}>&lt;&lt;</button>
          <button type="button" className="button nxt" onClick={nextTimer}>&gt;&gt;</button>
          <button type="button" className="button rst" onClick={reset}>↻</button>
        </div>
      </div>

    </>
  )
}

export default App
