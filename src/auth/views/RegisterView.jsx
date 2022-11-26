import React from "react";
import { Link } from "react-router-dom";
import { ButtonGradient } from "../../components/buttons/ButtonGradient";
import { EmailInput } from "../../components/inputs/EmailInput";
import { PasswordInput } from "../../components/inputs/PasswordInput";
import { UserInput } from "../../components/inputs/UserInput";
import { AuthTemplate } from "../template/AuthTemplate";
import imgUrl from "../../assets/img/calendar-auth-logo.png";
import { useForm } from "../../hooks/useForm";
import { useAuthStore } from "../../hooks/store/useAuthStore";

const formFields = {
  username: "",
  email: "",
  password1: "",
  password2: "",
};

export const RegisterView = () => {
  // manejador from formFields
  const {
    username,
    email,
    password1,
    password2,
    onInputChange,
    validationErrors,
  } = useForm(formFields);

  // hook (useAuthStore)
  const { startRegister } = useAuthStore();

  // onSubmit register form
  const onRegisterForm = (event) => {
    event.preventDefault();
    startRegister({
      username: username,
      email: email,
      password1: password1,
      password2: password2,
    });
  };

  return (
    <AuthTemplate>
      <img
        className="sm:hidden object-cover mt-2 h-full max-h-40 rounded-lg"
        src={imgUrl}
        alt="logo"
      />
      <form
        onSubmit={onRegisterForm}
        className="flex flex-col w-full sm:w-3/5 justify-center items-center p-4"
      >
        <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center sm:text-left max-w-xs w-full">
          Sign up!
        </h5>

        <article className="w-full grid grid-cols-1 max-w-xs gap-y-4">
          {/* errors general */}
          {validationErrors !== undefined &&
            validationErrors.errors !== undefined && (
              <p className=" w-full px-2 py-2 mt-1 bg-red-100 border border-solid border-red-600 text-red-600 rounded">
                {validationErrors.errors}
              </p>
            )}

          {/* user */}
          <div>
            <UserInput
              id="username"
              name="username"
              value={username}
              onChange={onInputChange}
            />
            {validationErrors !== undefined &&
              validationErrors.username !== undefined && (
                <p className=" w-full px-2 py-2 mt-1 bg-red-100 border border-solid border-red-600 text-red-600 rounded">
                  {validationErrors.username}
                </p>
              )}
          </div>

          {/* input email */}
          <div>
            <EmailInput
              id="email"
              name="email"
              value={email}
              onChange={onInputChange}
            />
            {validationErrors !== undefined &&
              validationErrors.email !== undefined && (
                <p className=" w-full px-2 py-2 mt-1 bg-red-100 border border-solid border-red-600 text-red-600 rounded">
                  {validationErrors.email}
                </p>
              )}
          </div>

          {/* input password */}
          <div>
            <PasswordInput
              id="password1"
              name="password1"
              value={password1}
              onChange={onInputChange}
            />
            {validationErrors !== undefined &&
              validationErrors.password1 !== undefined && (
                <p className=" w-full px-2 py-2 mt-1 bg-red-100 border border-solid border-red-600 text-red-600 rounded">
                  {validationErrors.password1}
                </p>
              )}
          </div>

          {/* input password2 */}
          <div>
            <PasswordInput
              id="password2"
              name="password2"
              value={password2}
              onChange={onInputChange}
              placeholder="Confirm Password"
            />
            {validationErrors !== undefined &&
              validationErrors.password2 !== undefined && (
                <p className=" w-full px-2 py-2 mt-1 bg-red-100 border border-solid border-red-600 text-red-600 rounded">
                  {validationErrors.password2}
                </p>
              )}
          </div>
        </article>

        {/* link auth/login */}
        <div className="w-full max-w-xs text-right mb-6">
          <Link
            to={"/auth/login"}
            className="text-sky-600 hover:text-white focus:text-white hover:bg-sky-600 focus:bg-sky-600 rounded-md px-2 py-1 font-bold transition-colors"
          >
            <span className="text-2xl">←</span> Go back
          </Link>
        </div>

        {/* login button */}
        <ButtonGradient buttonText={"Register"} action={() => {}} />
      </form>

      <img
        className="hidden sm:block object-cover w-2/5 rounded-lg"
        src={imgUrl}
        alt="logo"
      />
    </AuthTemplate>
  );
};
