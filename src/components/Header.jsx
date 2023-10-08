import dots from '../assets/dots.svg'
import down_arrow from '../assets/down_arrow.svg'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <img src={down_arrow} alt="" className='icon-1'/>
            <div className='medium bold'>
                English Songs
            </div>
            <img src={dots} alt="" className='icon-1'/>
        </div>
    )
}

export default Header