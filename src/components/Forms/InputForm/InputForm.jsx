import React from "react";
import PropTypes from "prop-types";

const InputForm = ({
  index,
  name,
  type,
  text,
  value,
  setValue,
  labelClassName,
  inputClassName,
}) => {
  return (
    <div key={index} className="mx-2">
      <label className={labelClassName} htmlFor={name}>
        {text}
      </label>
      <input
        className={inputClassName}
        id={name}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

InputForm.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.oneOf(["text"]),
  text: PropTypes.string,
  value: PropTypes.any,
  setValue: PropTypes.func,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string
};

InputForm.defaultProps = {
  type: "text",
  value: "",
};

export default InputForm;
