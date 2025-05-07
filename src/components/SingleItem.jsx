import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const SingleItem = ({ data, idPath }) => {
  return (
    <Link to={`${idPath}/${data?.id}`} className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src={data?.image}
            alt={`Artist Image ${data?.name}`}
          />
        </div>
        <FontAwesomeIcon
          className="single-item__icon"
          icon={faCirclePlay}
        />
      </div>

      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__title">{data?.name}</p>
        </div>

        <p className="single-item__type">{data?.artist ?? "Artista"}</p>
      </div>

    </Link>
  )
}

export default SingleItem;