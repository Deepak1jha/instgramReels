import React from 'react';
import './App.css';
import VideoCard from "./component/videos/VideoCard";

function App() {
  return (
    <div className="app">
      <div className="app_top">
        <img className="app_logo"
             src={"https://firebasestorage.googleapis.com/v0/b/isstracker-190613.appspot.com/o/instalogo.png?alt=media&token=2e9b19ed-2e2c-462b-9d7b-5e8b418d6912"}
             alt="logo"
        />
        <h1>Reels</h1>
      </div>

      <div className="app_videos">
        <VideoCard
          channel={"channel"}
          avatarSrc={"https://firebasestorage.googleapis.com/v0/b/isstracker-190613.appspot.com/o/instalogo.png?alt=media&token=2e9b19ed-2e2c-462b-9d7b-5e8b418d6912"}
          song={"song"}
          url={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
          likes={855}
          shares={454}
        />
      </div>
    </div>
  );
}

export default App;
