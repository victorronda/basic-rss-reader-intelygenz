import React from "react";
import { Link } from "react-router-dom";

const Title = () => {

  return (
    <nav className="navbar navbar-nav">
      <Link to={{ pathname: "/", state: []}}>
        <img
          style={{ maxHeight: "10rem", width: "auto" }}
          src="https://intelygenz.com/wp-content/uploads/2019/05/OpenGraphs_WEB_Core.png"
          alt="Intelygenz"
        />
      </Link>
    </nav>
  );
};

export default Title;
