import { faBackwardStep, faCirclePlay, faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Player = ({ duration, ramdomBackId, ramdomForwId }) => {
  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${ramdomBackId}`}>
          <FontAwesomeIcon className="single-item__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />

        <Link to={`/song/${ramdomForwId}`}>
          <FontAwesomeIcon className="single-item__icon" icon={faForwardStep} />
        </Link>
      </div>
      <div className="player__progress">
        <p>00:00</p>

        <div className="player__bar">
          <div className="player__bar-progress"></div>
        </div>

        <p>{duration}</p>
      </div>
    </div>
  )
}

export default Player;