import React, { useState } from "react";
import "./videoplayer.css";

const videos = [
  {
    id: "01",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    alt: "Training Week 1",
    title: "Training Week 1",
  },
  {
    id: "02",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    alt: "Training Week 2",
    title: "Training Week 2",
  },
  {
    id: "03",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    alt: "Fouls of Week 1",
    title: "Fouls of Week 1",
  },
];

function VideoPlayer() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  const handleItemClick = (id) => {
    console.log("testing handleitem Click");
    let video;
    for (let i = 0; i < videos.length; i++) {
      if (videos[i].id === id) {
        video = videos[i];
        break;
      }
    }
  
    setSelectedVideo(video);
  };

  return (
    <div className="VideoPlayer">
      <div className="toc">
        <h1>Table of Contents</h1>
        <ul>
          {videos.map((vid) => (
            <li key={vid.id}>
              <p onClick={() => handleItemClick(vid.id)}>{vid.title}</p>
            </li>
          ))}
        </ul>
      </div>

      <h2>{selectedVideo.title}</h2>
      <div className="video">
        <video src={selectedVideo.src} alt={selectedVideo.alt} controls />
      </div>
    </div>
  );
}

export default VideoPlayer;
/*
NOTES FOR VIDEO PLAYER
*/
/*
 {/* <Col>
          <div className="container" style={{ display: "flex" }}>
            <ul>
              {videos.items.map((vid) => (
                <li key={vid.id}>
                  <p onClick={() => handleItemClick(vid)}>{vid.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </Col> 
*/