import { useState, useCallback, useEffect } from "react";
import { EMAIL_REGEX } from "../utils/contains";

export function useFormValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;

    setValues({ ...values, [name]: value });

    if (name === "email") {
      const isValidEmail = EMAIL_REGEX.test(value);
      setErrors({
        ...errors,
        [name]: isValidEmail ? "" : "Некорректный адрес электронной почты",
      });
    } else {
      setErrors({ ...errors, [name]: e.target.validationMessage });
    }
  };

  useEffect(() => {
    const formValid = document.querySelector("form").checkValidity();
    const isEmailValid = EMAIL_REGEX.test(values.email);
    const isNameValid = "name" in values ? values.name.trim().length > 0 : true;

    setIsValid(
      formValid &&
        Object.values(errors).every((error) => !error) &&
        isEmailValid &&
        isNameValid
    );
  }, [values, errors]);

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  };
}
