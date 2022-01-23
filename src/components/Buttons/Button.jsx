import React, { Fragment } from "react";
import PropTypes from "prop-types";

function Button({ index, name, type, text, buttonClassName }) {
  return (
    <Fragment key={index}>
      <button className={buttonClassName} name={name} type={type}>{text}</button>
    </Fragment>
  );
}

Button.propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    text: PropTypes.string,
    buttonClassName: PropTypes.string,
};

Button.defaultProps = {
    type: "button",
    text: "Enviar",
}

export default Button;
