import React from 'react';
import '../styles/Clock.scss';

const Clock = ( {secRatio, minRatio, hourRatio }) => {
    return (
        <div className='clock'>
            <div id="hour-hand" className="hand hour" 
            style={ {transform: `translate(-50%) rotate(${hourRatio * 360}deg)`}}></div>
            <div id="minute-hand" className="hand minute"
            style={ {transform: `translate(-50%) rotate(${minRatio * 360}deg)`}}></div>
            <div id="second-hand" className="hand second"
            style={ {transform: `translate(-50%) rotate(${secRatio * 360}deg)`}}></div>
            <div id="center-point" className=""></div>
            <div className="num number1"><div>1</div></div>
            <div className="num number2"><div>2</div></div>
            <div className="num number3"><div>3</div></div>
            <div className="num number4"><div>4</div></div>
            <div className="num number5"><div>5</div></div>
            <div className="num number6"><div>6</div></div>
            <div className="num number7"><div>7</div></div>
            <div className="num number8"><div>8</div></div>
            <div className="num number9"><div>9</div></div>
            <div className="num number10"><div>10</div></div>
            <div className="num number11"><div>11</div></div>
            <div className="num number12"><div>12</div></div>
        </div>
    )
}

export default Clock
