import { useRef, useState } from 'react';
import './ProgressBar.css'

function ProgressBar({ currentTime, setCurrentTime, totalTime, setAudioState, audioState }) {
    const cirlce_ref = useRef();

    const pink_line_ref = useRef();
    const white_line_ref = useRef();
    const isDraging = useRef(false);
    const prevStatus = useRef();

    const line_status = {
        width: `${(currentTime / totalTime) * 382}px`
    }

    const handleDown = (event) => {
        prevStatus.current = audioState;
        //console.log(prevStatus.current);
        isDraging.current = true;

        if((event.nativeEvent.offsetX) < (0 + 24)) {
            cirlce_ref.current.style.left = `${0 + 24}px`;
        } else if ((event.nativeEvent.offsetX) > (382 + 24)) {
            cirlce_ref.current.style.left = `${382 + 24}px`;
        } else {
            cirlce_ref.current.style.left = `${event.nativeEvent.offsetX}px`;
            pink_line_ref.current.style.width = `${event.nativeEvent.offsetX - 15}px`
        }
        if (prevStatus.current) {
            setAudioState(false);
        }
    }

    const handleMove = (event) => {
        if (isDraging.current) {
            if ((event.nativeEvent.offsetX) < (0 + 24)) {
                cirlce_ref.current.style.left = `${0 + 24}px`;
            } else if ((event.nativeEvent.offsetX) > (382 + 24)) {
                cirlce_ref.current.style.left = `${382 + 24}px`;
            } else {
                cirlce_ref.current.style.left = `${event.nativeEvent.offsetX}px`;
                //console.log(`${event.nativeEvent.offsetX}px`);
                pink_line_ref.current.style.width = `${event.nativeEvent.offsetX - 15}px`
            }
        }
    }

    const handleUp = (event) => {
        isDraging.current = false;
        if (prevStatus.current) {
            setAudioState(true)
        }
        setCurrentTime(((parseInt(cirlce_ref.current.style.left) - 24) / 382) * totalTime);
    }

    const style_circle = {
        left: `${(currentTime / totalTime) * 382 + 24}px`
    }

    return (
        <div className="bar-container">
            <div className='bar'>
                <div
                    className='line-white'
                    ref={white_line_ref}
                    >
                </div>
                <div className='line-pink'
                    style={line_status}
                    ref={pink_line_ref}></div>
            </div>
            <div className='circle-range'
                onMouseDown={event => handleDown(event)}
                onMouseUp={event => handleUp(event)}
                onMouseMove={event => handleMove(event)}
            >
            </div>
            <div
                ref={cirlce_ref}
                className='circle'
                style={style_circle}
            ></div>
        </div>
    )
}

export default ProgressBar