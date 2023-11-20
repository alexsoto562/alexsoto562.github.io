import React, { useState } from "react";
import TableOfContents from "./TableOfContents";
import VideoDisplay from "./VideoDisplay";
import "./trainingvideodetail.css";

function TrainingVideoApp() {
  const [currentVideo, setCurrentVideo] = useState();

  const videos = [
    {
      id: 1,
      title: "Video Title 1",
      description:
        "Due to company policy I cannot show actual training videos, images, or titles used.",
      imageUrl: "/images/coding-and-programming--computer-science-and-it.jpg",
      mediaUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Video Title 2",
      description:
        "Due to company policy I cannot show actual training videos, images, or titles used.",
      imageUrl:
        "/images/programming-background-with-person-working-with-codes-computer_23-2150010125.avif",
      mediaUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  const handleVideoClick = (mediaUrl) => {
    console.log(mediaUrl);
    setCurrentVideo(mediaUrl);
  };

  return (
    <div className="training-videos-container">
      <div className="videos-grid">
        {videos.map((video) => (
          <TableOfContents
            key={video.id}
            item={video}
            onVideoClick={handleVideoClick}
          />
        ))}
      </div>
      <div className="training-video-player">
        <VideoDisplay video={currentVideo} />
      </div>
    </div>
  );
}

export default TrainingVideoApp;
