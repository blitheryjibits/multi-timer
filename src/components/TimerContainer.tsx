import { Timer } from '../components/Timer'
import { useRef, forwardRef, useImperativeHandle } from 'react'

type TimerContainer = {
    timers: {
        id: number,
        title: string,
        duration: number
    }[]
    isRunning: boolean,
    onComplete: () => void,
    currentTimer: number,
}

export const TimerContainer = forwardRef<{ resetAll: () => void }, TimerContainer>(
    ({ timers, isRunning, onComplete, currentTimer }, ref) => {
    
    const timerRefs = useRef<{ [key: number]: { reset: () => void }}>({})

    useImperativeHandle(ref, () => ({
        resetAll: () => {
            Object.values(timerRefs.current).forEach(timer => timer?.reset())
        }
    }))

    return (
        <div className="timer-container">
            {timers.map(timer => {
            return (
                <Timer 
                key={timer.id}
                title={timer.title || "Timer"}
                duration={timer.duration}
                isActive={isRunning && currentTimer === timer.id}
                isSelected={currentTimer === timer.id}
                onComplete={onComplete}
                ref={(instance) => {
                    if (instance) timerRefs.current[timer.id] = instance;
                }}
                />)})}
        </div>
    )
})