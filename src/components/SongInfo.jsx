import './SongInfo.css'
import heart from '../assets/heart.svg'

function SongInfo({ chossenCD }) {
    return (
        <div className="info-container">
            <div className='names'>
                <div className='song-name'>
                    {chossenCD.title}
                </div>
                <div className='singer'>
                    {chossenCD.singer}
                </div>
            </div>
            <img src={heart} alt="" className='icon-1'/>
        </div>
    )
}

export default SongInfo