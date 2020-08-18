import React, {useEffect, useState} from 'react';
import './App.css';
import VideoCard from "./component/videos/VideoCard";
import db from "../src/component/firebase";

function App() {

  const [reels, setReels] = useState([]);

  useEffect(() => {
    db.collection('reels').onSnapshot(snapshot => {
      setReels(snapshot.docs.map(doc => doc.data()))
    });
  }, []);


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
        {reels.map(({channel, avatarSrc, song, url, likes, shares}) => (
            <VideoCard
              channel={channel}
              avatarSrc={avatarSrc}
              song={song}
              url={url}
              likes={likes}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
