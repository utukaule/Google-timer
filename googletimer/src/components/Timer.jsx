import { useEffect, useState } from "react";
import { Showtimer } from "./Showtimer";
import { Controlbuttons } from "./Controlbuttons";

export const Timer = () => {

    const [isActive, setIsActive] = useState(false);

    const [isPaused, setIsPaused] = useState(true);

    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {

            interval = setInterval(() => {

                setTime((time) => time + 10);
            }, 10);

        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);


    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    return (
        <div>
            <h1 style={{ color: "black", fontSize: "20px", }}>Google Timer</h1>

            <Showtimer time={time} />

            <Controlbuttons
                active={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
                handleReset={handleReset}
            />

        </div>
    )
}