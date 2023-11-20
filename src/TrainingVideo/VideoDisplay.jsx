import React from "react";
import PropTypes from "prop-types";
import "./trainingvideodetail.css";
import NoteSection from "./NoteSection";

function VideoDisplay({ video }) {
    if (!video) {
        return <div className="video-placeholder">Please click a video on the table of contents</div>; // or some placeholder
    }
    return (
        <div className="video-and-notes-container">
            <div className="ratio ratio-16x9">
                <iframe
                    title="video display"
                    src={video}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            <NoteSection />
        </div>
    );
}

VideoDisplay.propTypes = {
    video: PropTypes.string.isRequired,
};

export default VideoDisplay;
