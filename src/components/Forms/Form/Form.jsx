import React from "react";
import PropTypes from "prop-types";
import InputForm from "../InputForm/InputForm";
import Button from "../../Buttons/Button";

function Form({ inputs, buttons, onSubmit, formClassName }) {
  return (
    <form className={formClassName} onSubmit={onSubmit}>
      <div className="row d-flex flex-column mb-3">
        {inputs &&
          inputs.map((input, index) => {
            const { name, type, text, value, setValue, labelClassName, inputClassName } = input;
            return (
              <InputForm
                key={index}
                name={name}
                type={type}
                text={text}
                value={value}
                setValue={setValue}
                labelClassName={labelClassName}
                inputClassName={inputClassName}
              />
            );
          })}
      </div>
      <div className="row d-flex">
        {buttons &&
          buttons.map((button, index) => {
            const { name, type, text, buttonClassName } = button;
            return (
              <Button
                key={index}
                name={name}
                type={type}
                text={text}
                buttonClassName={buttonClassName}
              />
            );
          })}
      </div>
    </form>
  );
}

Form.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
  buttons: PropTypes.arrayOf(PropTypes.object),
  formClassName: PropTypes.string,
};

export default Form;
