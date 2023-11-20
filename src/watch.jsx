import React, { useState, useEffect } from 'react';

const Watch = ({ setHistory }) => {
    const [time, setTime] = useState(0);
    const [timer, setTimer] = useState(null);
    const [result, setResult] = useState([]);

    const handleStart = () => {
        clearInterval(timer);
        const newTimer = setInterval(() => setTime(prevTime => prevTime + 1), 10);
        setTimer(newTimer);
        setResult([]);

    };

    const handleStop = () => {
        clearInterval(timer);
        setTimer(null);
    };

    const handleReset = () => {
        clearInterval(timer);
        setTimer(null);

        const milliseconds = String(time % 100).padStart(2, '0');
        const seconds = String(Math.floor((time / 100) % 60)).padStart(2, '0');
        const minutes = String(Math.floor((time / 6000) % 60)).padStart(2, '0');
        let formattedTime = `${minutes}:${seconds}:${milliseconds}`;

        const updatedHistory = [...result, formattedTime];
        setHistory(updatedHistory);

        setTime(0);
        setResult([]);
    };

    useEffect(() => {
        return () => clearInterval(timer);
    }, [timer]);

    const milliseconds = String(time % 100).padStart(2, '0');
    const seconds = String(Math.floor((time / 100) % 60)).padStart(2, '0');
    const minutes = String(Math.floor((time / 6000) % 60)).padStart(2, '0');

    return (
        <div className="container">
            <div>{minutes}:{seconds}:{milliseconds}</div>
            <button onClick={handleStart} className="but">Start</button>
            <button onClick={handleStop} className="but">Stop</button>
            <button onClick={handleReset} className="but">Reset</button>

            <ul>
                {result.map((res, index) => (
                    <li key={index}>{res}</li>
                ))}
            </ul>
        </div>
    );
}

export default Watch;
