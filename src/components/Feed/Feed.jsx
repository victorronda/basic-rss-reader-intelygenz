import React from "react";
import PropTypes from "prop-types";

const Feed = ({ title, description, imageSrc, index, handleFeedDetailedRequest }) => {

  const shortDescription = (description.length > 300) ? description.slice(0,300).concat("...") : description;

  return (
    <div key={index} className="card mb-4" onClick={(e) => handleFeedDetailedRequest(e, index)}>
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body" >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{shortDescription}</p>
          </div>
        </div>
        <div className="col-md-4">
          <img className="img-fluid rounded-start" src={imageSrc} alt={title} />
        </div>
      </div>
    </div>
  );
};

Feed.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
  index: PropTypes.number.isRequired,
  handleFeedDetailedRequest: PropTypes.func.isRequired
};

export default Feed;
