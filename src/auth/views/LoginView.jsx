import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonGradient } from "../../components/buttons/ButtonGradient";
import { ButtonGradientOutline } from "../../components/buttons/ButtonGradientOutline";
import { EmailInput } from "../../components/inputs/EmailInput";
import { PasswordInput } from "../../components/inputs/PasswordInput";
import { AuthTemplate } from "../template/AuthTemplate";
import imgUrl from '../../assets/img/calendar-auth-logo.png'

export const LoginView = () => {
  const navigate = useNavigate();
  return (
    <AuthTemplate>
      <img
        className="sm:hidden object-cover mt-2 h-full max-h-40 rounded-lg"
        src={imgUrl}
        alt="logo"
      />
      <div className="flex flex-col w-full sm:w-3/5 justify-center items-center p-4">
        <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center sm:text-left max-w-xs w-full">
          welcome back!
        </h5>

        {/* input email */}
        <EmailInput />

        {/* input password */}
        <PasswordInput />

        <div className="mt-6 w-full text-center">
          {/* login button */}
          <ButtonGradient buttonText={"Login"} />

          {/* register button */}
          <ButtonGradientOutline buttonText={"Register"} action={() => navigate('/auth/register')}/>
        </div>
      </div>

      <img
        className="hidden sm:block object-cover w-2/5 rounded-lg"
        src={imgUrl}
        alt="logo"
      />
    </AuthTemplate>
  );
};
