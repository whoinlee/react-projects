import React, { useState, useEffect } from 'react';
import '../App.css';

const Clock = () => {
    const [clockState, setClockState] = useState('');
    const setClock = () => {
        const date = new Date();
        setClockState(date.toLocaleTimeString());
    }
    useEffect(() => {
        //console.log('useEffect');
        setClock();
        setInterval(setClock, 1000);
    }, [])
    
    return (
        <div className="clock">
            {clockState}
        </div>
    )
}

export default Clock
