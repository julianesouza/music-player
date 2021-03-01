import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'


const Player = ({ currentSong, isPlaying, setIsPlaying }) => {

    //Refs
    const audioRef = useRef(null);

    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    return(
        <div className="player">
            <div className="time-control">
                <p>Start time</p>
                <input type="range"/>
                <p>end time</p>
            </div>

            <div className="play-control">
                <FontAwesomeIcon className="back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay}/>
                <FontAwesomeIcon className="forward" size="2x" icon={faAngleRight}/>
            </div>
            <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
    );
}

export default Player;