import React, {useRef, useState} from "react";
import '../videos/VideoCard.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function VideoCard({channel, avatarSrc, song, url, likes, shares}) {

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
      <Header/>
      <video className="video_player"
             ref={videoRef}
             onClick={onVideoPress}
             src={url} alt="IG Reel Video"
             loop/>
      <Footer
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
        likes={likes}
        shares={shares}
      />
    </div>
  )
}
