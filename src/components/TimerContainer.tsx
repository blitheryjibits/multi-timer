import { Timer } from '../components/Timer'

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

export const TimerContainer: React.FC<TimerContainer> = ({ timers, isRunning, onComplete, currentTimer}) => {

    return (
        <div className="timer-container">
            {timers.map(timer => {
            return (
                <Timer 
                key={timer.id}
                title={timer.title || "Timer"}
                duration={timer.duration}
                isActive={isRunning && currentTimer === timer.id}
                onComplete={onComplete}
                />)})}
        </div>
    )
}