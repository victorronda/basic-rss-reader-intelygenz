import React from "react";
import { Link, useLocation} from "react-router-dom";

const FeedDetailedPage = () => {
  const location = useLocation();
  const { title, description, imageSrc } = location.state.feed;

  return (
    <div className="container-fluid p-5 bg-white w-100">
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imageSrc} alt={title}></img>
      <div className="d-flex justify-content-around">
        <Link className="btn btn-info mt-4 text-white" to="/">
          Volver a la página principal
        </Link>
        <Link
          to={{ pathname: "/", state: location.state.feeds }}
          className="btn btn-warning mt-4"
        >
          Volver atrás
        </Link>
      </div>
    </div>
  );
};

export default FeedDetailedPage;
