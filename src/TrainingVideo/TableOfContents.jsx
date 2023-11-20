import React from "react";
import PropTypes from "prop-types";
import "./trainingvideodetail.css";

const TableOfContents = ({ item, onVideoClick }) => {
  return (
    
    <div className="video-card-container" onClick={() => onVideoClick(item.mediaUrl)}>
      
      <div className="video-card-img">
        <img src={item.imageUrl} alt={item.title} />
      </div>
      <div className="video-card-text">
        <h3 className="card-title">{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

TableOfContents.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    mediaUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  onVideoClick: PropTypes.func.isRequired,
};

export default TableOfContents;
