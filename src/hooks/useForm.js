import { useEffect, useMemo, useState } from "react";
import { useAuthStore } from "./store/useAuthStore";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});
  // errors validation state
  const [validationErrors, setValidationErrors] = useState({});
  // hook (useAuthStore)
  const { errorMessage, clearErrorMessage } = useAuthStore();

  useEffect(() => {
    createValidators();
  }, [formState]);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  // manage validations erros
  useEffect(() => {
    if (errorMessage !== undefined) {
      setValidationErrors(errorMessage);
    }

    if (errorMessage !== undefined) {
      clearErrorMessage()
    }
  }, [errorMessage]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }

    return true;
  }, [formValidation]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];

      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,

    ...formValidation,
    validationErrors,
    setValidationErrors,
    isFormValid,
  };
};
