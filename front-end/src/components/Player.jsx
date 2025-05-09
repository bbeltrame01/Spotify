import { faBackwardStep, faCirclePause, faCirclePlay, faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const formatTime = (secondTime) => {
  const minutes = Math.floor(secondTime / 60);
  const seconds = Math.floor(secondTime - minutes * 60).toString().padStart(2, "0");

  return `${minutes}:${seconds}`;
};

const timeInSeconds = (time) => {
  const splitArray = time.split(":");
  const minutes = Number(splitArray[0]);
  const seconds = Number(splitArray[1]);

  return seconds + minutes * 60;
};

const Player = ({ duration, audio, randomBackId, randomForwId }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const progressBarRef = useRef();
  const durationInSeconds = timeInSeconds(duration);

  const handlePlayPause = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {handlePlayPause()},[]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying)
        setCurrentTime(audioRef.current.currentTime);

      progressBarRef.current.style.setProperty('--_progress', ((audioRef.current.currentTime / durationInSeconds) * 100) + "%")
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying])

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomBackId}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => handlePlayPause()}
        />

        <Link to={`/song/${randomForwId}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p className="player__time">{formatTime(currentTime)}</p>

        <div className="player__bar">
          <div ref={progressBarRef} className="player__bar-progress"></div>
        </div>

        <p className="player__time">{duration}</p>
      </div>

      <audio ref={audioRef} src={audio}></audio>
    </div>
  )
}

export default Player;
