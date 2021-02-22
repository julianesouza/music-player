import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'


const Player = () => {
    return(
        <div className="player">
            <div className="time-control">
                <p>Start time</p>
                <input type="range"/>
                <p>end time</p>
            </div>

            <div className="play-control">
                <FontAwesomeIcon className="back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon className="play" size="2x" icon={faPlay}/>
                <FontAwesomeIcon className="forward" size="2x" icon={faAngleRight}/>
            </div>
        </div>
    );
}

export default Player;