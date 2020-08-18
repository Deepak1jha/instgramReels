import React, {useRef, useState} from "react";
import '../videos/VideoCard.css';

export default function VideoCard() {

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false)
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true)
    }
  }

  return (
    <div className="videoCard">
      <video className="video_player"
             ref={videoRef}
             onClick={onVideoPress}
             src={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"} alt="IG Reel Video"
             loop/>
    </div>
  )
}
