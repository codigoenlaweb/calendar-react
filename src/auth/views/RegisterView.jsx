import React from "react";
import { Link } from "react-router-dom";
import { ButtonGradient } from "../../components/buttons/ButtonGradient";
import { ButtonGradientOutline } from "../../components/buttons/ButtonGradientOutline";
import { EmailInput } from "../../components/inputs/EmailInput";
import { PasswordInput } from "../../components/inputs/PasswordInput";
import { UserInput } from "../../components/inputs/UserInput";
import { AuthTemplate } from "../template/AuthTemplate";
import imgUrl from '../../assets/img/calendar-auth-logo.png'

export const RegisterView = () => {
  return (
    <AuthTemplate>
      <img
        className="sm:hidden object-cover mt-2 h-full max-h-40 rounded-lg"
        src={imgUrl}
        alt="logo"
      />
      <div className="flex flex-col w-full sm:w-3/5 justify-center items-center p-4">
        <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center sm:text-left max-w-xs w-full">
          Sign up!
        </h5>

        {/* user */}
        <UserInput />
        {/* input email */}
        <EmailInput />

        {/* input password */}
        <PasswordInput />

        {/* link auth/login */}
        <div className="w-full max-w-xs text-right -mt-3 mb-6">
          <Link
            to={"/auth/login"}
            className="text-sky-600 hover:text-white focus:text-white hover:bg-sky-600 focus:bg-sky-600 rounded-md px-2 py-1 font-bold transition-colors"
          >
            <span className="text-2xl">←</span> Go back
          </Link>
        </div>

        {/* login button */}
        <ButtonGradient buttonText={"Register"} />
      </div>

      <img
        className="hidden sm:block object-cover w-2/5 rounded-lg"
        src={imgUrl}
        alt="logo"
      />
    </AuthTemplate>
  );
};
