import React from "react";
import "./VideoRow.css";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  image,
  title
}) {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel}. <span className="videoRow__subsNumber">{subs}</span>
          subscripton {views}views. {timestamp}1 houre
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
