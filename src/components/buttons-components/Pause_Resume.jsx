import './Pause_Resume.css'

function Pause_Resume({ status, clickPause_Resume }) {

    const pause = <div className="pause-but">
        <svg xmlns="http://www.w3.org/2000/svg" height="66.67px" viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z" fill="#FEA5B0" />
        </svg>
    </div>
    const resume = <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_18)">
            <g filter="url(#filter0_d_1_18)">
                <path d="M40 6.66667C33.4073 6.66667 26.9626 8.62164 21.481 12.2844C15.9994 15.9471 11.7269 21.153 9.20402 27.2439C6.6811 33.3348 6.02098 40.037 7.30716 46.503C8.59333 52.9691 11.768 58.9085 16.4298 63.5702C21.0915 68.232 27.031 71.4067 33.497 72.6929C39.963 73.979 46.6652 73.3189 52.7561 70.796C58.847 68.2731 64.0529 64.0007 67.7156 58.519C71.3784 53.0374 73.3333 46.5927 73.3333 40C73.3333 35.6226 72.4711 31.2881 70.796 27.2439C69.1208 23.1997 66.6655 19.5251 63.5702 16.4298C60.4749 13.3345 56.8003 10.8792 52.7561 9.20402C48.7119 7.52886 44.3774 6.66667 40 6.66667ZM33.3333 55V25L53.3333 40L33.3333 55Z" fill="#FEA5B0" />
            </g>
        </g>
    </svg>
    let result = status ? pause : resume;
    return (
        <button className='click' onClick={clickPause_Resume}>
            {result}
        </button>
    )
}

export default Pause_Resume