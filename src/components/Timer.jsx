import './Timer.css'

function parseTwoDigits(value) {
    let string = value.toString();
    let result = (string.length === 1) ? ('0' + string) : (string);
    return result;
}

function Timer({ currentTime, setCurrentTime, totalTime}) {

    let min_cur = currentTime / 60;
    let sec_cur = currentTime % 60;
    let min_total = totalTime / 60;
    let sec_total = totalTime % 60;

    return (
        <div className="time-container">
            <div className="time">
                {parseTwoDigits(parseInt(min_cur)) + ':' + parseTwoDigits(parseInt(sec_cur))}
            </div>
            <div className="time">
                {parseTwoDigits(parseInt(min_total)) + ":" + parseTwoDigits(parseInt(sec_total))}
            </div>
        </div>
    )
}

export default Timer