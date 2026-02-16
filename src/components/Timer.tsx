import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react'

type Timer = {
    duration: number
    isActive: boolean
    onComplete: () => void
    title?: string | null
    isSelected?: boolean
}

export const Timer = forwardRef<{ reset: () => void }, Timer> (({ duration, isActive, onComplete, title, isSelected }, ref) => {
    const [timePassed, setTimePassed] = useState(0)
    const intervalRef = useRef<number | null>(null)
    const completedRef = useRef(false)
    
    useImperativeHandle(ref, () => ({
        reset: () => {
            setTimePassed(0)
            completedRef.current = false
        }
    }))

    useEffect(() => {
        // if paused or not active, clear any running interval
        if (!isActive) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
            return
        }

        completedRef.current = false
        if (intervalRef.current) return

        intervalRef.current = window.setInterval(() => {
            setTimePassed(prev => {
                const next = prev + 1
                if (next >= duration) {
                    if (!completedRef.current) {
                        completedRef.current = true
                        if (intervalRef.current) {
                            clearInterval(intervalRef.current)
                            intervalRef.current = null
                        }
                        setTimeout(() => { try { onComplete() } catch (err) { console.log(err) } }, 0)
                    }
                    return duration
                }
                return next
            })
        }, 1000)

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
        }
    }, [isActive])

const formatTime = (t: number) => { 
    if(!(t > 0)) return `00:00`;
    const seconds = String(Math.floor(t % 60)).padStart(2, '0') 
    const minutes = String(Math.floor(t / 60)).padStart(2, '0') 
    return `${minutes}:${seconds}`  
}




    return (
        <div className={`timer-card ${isSelected ? "active" : "" } ${duration-60 < timePassed ? "passed" : ""}`}>
            {title && <div className="timer-card-header">{title}</div>}
            <div className="timer-card-body">
                <div className="time">
                    {`${formatTime(timePassed)} / ${formatTime(duration)}`}
                </div>
            </div>
        </div>
    )
})