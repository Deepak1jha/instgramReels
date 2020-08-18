import React from "react";
import '../videos/VideoCard.css';

export default function VideoCard() {

  return (
    <div className="videoCard">
      <video className="video_player" src={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"} alt="IG Reel Video" loop/>
      <video className="video_player" src={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"} alt="IG Reel Video" loop/>
      <video className="video_player" src={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"} alt="IG Reel Video" loop/>
      <video className="video_player" src={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"} alt="IG Reel Video" loop/>
      <video className="video_player" src={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"} alt="IG Reel Video" loop/>
      <video className="video_player" src={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"} alt="IG Reel Video" loop/>
    </div>
  )
}
