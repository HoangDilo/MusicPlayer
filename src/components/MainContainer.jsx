import './MainContainer.css'
import Header from './Header'
import TheCD from './TheCD'
import SongInfo from './SongInfo'
import ProgressBar from './ProgressBar'
import Timer from './Timer'
import FunctionalButtons from './FunctionalButtons'
import OtherButtons from './OtherButtons'
import Lyric from './Lyric'
import { useEffect, useState } from 'react'

import play_list from '../assets/play_list'

function MainContainer() {

    const [audioState, setAudioState] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChangeIndex = (offset) => {
        if(currentIndex === 0) {
            if(offset < 0) {
                setCurrentIndex(play_list.length - 1);
            } else if(offset > 0) {
                setCurrentIndex(currentIndex => currentIndex + 1)
            } 
        } else if (currentIndex === play_list.length -1) {
            if(offset > 0) {
                setCurrentIndex(0)
            } else if(offset < 0) {
                setCurrentIndex(currentIndex => currentIndex - 1)
            }
        } else {
            if(offset < 0) {
                setCurrentIndex(currentIndex => currentIndex - 1)
            } else if(offset > 0) {
                setCurrentIndex(currentIndex => currentIndex + 1)
            }
        }
    }

    return (
        <div className="main-container">
            <div className='bobble'></div>
            <Header />
            <div className='session-1'>
                <div className='cd-border'>
                    <TheCD
                        playStatus={audioState}
                        currentTime={currentTime}
                        setCurrentTime={setCurrentTime}
                        setTotalTime={setTotalTime}
                        setAudioState={setAudioState}
                        chossenCD = {play_list[currentIndex]}
                    />
                </div>
            </div>
            <div className='session-2'>
                <SongInfo chossenCD={play_list[currentIndex]}></SongInfo>
            </div>
            <div className='session-3'>
                <ProgressBar
                    currentTime={currentTime}
                    setCurrentTime={setCurrentTime}
                    totalTime={totalTime}
                    audioState={audioState}
                    setAudioState={setAudioState}
                />
                <Timer
                    currentTime={currentTime}
                    totalTime={totalTime}
                />
            </div>
            <FunctionalButtons
                audioState={audioState}
                setAudioState={setAudioState}
                handleChangeIndex = {handleChangeIndex}
            />
            <OtherButtons />
            <Lyric />
        </div>
    )
}
export default MainContainer