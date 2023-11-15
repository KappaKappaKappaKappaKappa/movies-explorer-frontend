import { useState, useCallback, useEffect } from "react";

export function useFormValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;

    setValues({ ...values, [name]: value });

    if (name === "email") {
      const isValidEmail = emailRegex.test(value);
      setErrors({
        ...errors,
        [name]: isValidEmail ? "" : "Некорректный адрес электронной почты",
      });
    } else {
      setErrors({ ...errors, [name]: e.target.validationMessage });
    }
  };

  useEffect(() => {
    const isEmailValid = emailRegex.test(values.email);
    const isNameValid = values.name;
    setIsValid(
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
