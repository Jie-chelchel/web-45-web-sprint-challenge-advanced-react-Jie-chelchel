// write your custom hook here to control your checkout form
import React, { useState } from "react";

const useForm = (initialValue) => {
  //all codes related to states are moved here
  //updated states and setState function will be return to whoever is calling this custom hook.
  const [values, setValues] = useState(initialValue);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };
  return { values, showSuccessMessage, handleChanges, handleSubmit };
};

export default useForm;
