import './TheCD.css'
import { useEffect, useRef, useState } from 'react'

function TheCD({ playStatus, currentTime, setCurrentTime, setTotalTime, setAudioState, chossenCD }) {
    const audio_ref = useRef();

    const CD_status = {
        animationPlayState: playStatus ? 'running' : 'paused',
    };

    useEffect(() => {
        audio_ref.current.currentTime = currentTime;
    }, [playStatus])

    useEffect(() => {
        playStatus ? audio_ref.current.play() : audio_ref.current.pause();
    })

    useEffect(() => {
        audio_ref.current.src = chossenCD.audio_src;
    }, [chossenCD])

    return (
        <>
            <div className='cd-container' style={CD_status}>
                <img src={chossenCD.img_src} alt="" className='cds' />
            </div>
            <audio
                ref={audio_ref}
                controls={true}
                hidden
                onTimeUpdate={(event) => setCurrentTime(event.target.currentTime)}
                onCanPlay={(event)=> setTotalTime(event.target.duration)}
                onEnded={() => setAudioState(false)}
            >
                <source src={chossenCD.audio_src} type='audio/ogg' />
            </audio>
        </>
    )
}

export default TheCD