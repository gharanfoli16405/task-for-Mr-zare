import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

function CustomInput({
  name,
  label,
  placeholder,
  initialValue,
  type,
  handleChangeInput,
}) {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type ? type : "text"}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={(e) => handleChangeInput(e)}
      />
    </Form.Group>
  );
}

export default CustomInput;
