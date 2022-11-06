import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonGradient } from "../../components/buttons/ButtonGradient";
import { ButtonGradientOutline } from "../../components/buttons/ButtonGradientOutline";
import { EmailInput } from "../../components/inputs/EmailInput";
import { PasswordInput } from "../../components/inputs/PasswordInput";
import { AuthTemplate } from "../template/AuthTemplate";
import imgUrl from "../../assets/img/calendar-auth-logo.png";
import { useForm } from "../../hooks/useForm";
import { useAuthStore } from "../../hooks/store/useAuthStore";

const formFields = {
  email: "",
  password: "",
};

export const LoginView = () => {
  // manejador from formFields
  const { email, password, onInputChange, isFormValid, formState } =
    useForm(formFields);
  // hook (useAuthStore)
  const { startLogin, errorMessage } = useAuthStore();

  // onSubmit for login
  const onLoginSubmit = (event) => {
    event.preventDefault();
    // dispatch useAuthStore (startLogin)
    startLogin({ email: email, password: password });
  };

  const navigate = useNavigate();
  return (
    <AuthTemplate>
      <img
        className="sm:hidden object-cover mt-2 h-full max-h-40 rounded-lg"
        src={imgUrl}
        alt="logo"
      />
      <form
        onSubmit={onLoginSubmit}
        className="flex flex-col w-full sm:w-3/5 justify-center items-center p-4"
      >
        <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center sm:text-left max-w-xs w-full">
          welcome back!
        </h5>
        <article className="w-full grid grid-cols-1 max-w-xs gap-y-4">
          {/* errors general */}
          {errorMessage !== undefined && errorMessage.errors !== undefined && (
            <p className=" w-full px-2 py-2 mt-1 bg-red-100 border border-solid border-red-600 text-red-600 rounded">
              {errorMessage.errors}
            </p>
          )}

          {/* input email */}
          <div>
            <EmailInput
              id="email"
              name="email"
              value={email}
              onChange={onInputChange}
            />
            {errorMessage !== undefined && errorMessage.email !== undefined && (
              <p className=" w-full px-2 py-2 mt-1 bg-red-100 border border-solid border-red-600 text-red-600 rounded">
                {errorMessage.email}
              </p>
            )}
          </div>

          {/* input password */}
          <div>
            <PasswordInput
              id="password"
              name="password"
              value={password}
              onChange={onInputChange}
            />
            {errorMessage !== undefined &&
              errorMessage.password !== undefined && (
                <p className=" w-full px-2 py-2 mt-1 bg-red-100 border border-solid border-red-600 text-red-600 rounded">
                  {errorMessage.password}
                </p>
              )}
          </div>
        </article>
        <div className="mt-6 w-full text-center">
          {/* login button */}
          <ButtonGradient
            buttonText={"Login"}
            type="submit"
            action={() => {}}
          />

          {/* register button */}
          <ButtonGradientOutline
            buttonText={"Register"}
            action={() => navigate("/auth/register")}
          />
        </div>
      </form>

      <img
        className="hidden sm:block object-cover w-2/5 rounded-lg"
        src={imgUrl}
        alt="logo"
      />
    </AuthTemplate>
  );
};
