import { useSelector, useDispatch } from "react-redux";
import { calendarApi } from "../../api";
import { onClearErrorMessage, onLogin, onLogout, onRegister } from "../../store";

export const useAuthStore = () => {
  // propiedades
  const { access_token, refresh_token, status, errorMessage, user } =
    useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // metodos
  const startLogin = async ({ email, password }) => {
    dispatch(onClearErrorMessage());
    try {
      // rest
      const { data } = await calendarApi.post("/dj-rest-auth/login/", {
        email,
        password,
      });

      // set token localStorage
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("token-init-date", new Date().getTime());

      // dispatch onlogin autheticated
      dispatch(
        onLogin({
          user: {
            id: data.user.id,
            email: data.user.email,
            username: data.user.username,
          },
          access_token: data.access_token,
          refresh_token: data.refresh_token,
        })
      );
    } catch (error) {
      console.log("error ", error);
      dispatch(onLogout({ errorMessage: error.response.data }));
    }
  };

  const startRegister = async ({ username, email, password1, password2 }) => {
    dispatch(onClearErrorMessage());
    try {
      // rest
      const { data } = await calendarApi.post("/dj-rest-auth/registration/", {
        username,
        email,
        password1,
        password2,
      });

      // dispatch onlogin autheticated
      dispatch(onRegister());
    } catch (error) {
      console.log("error ", error);
      dispatch(onLogout({ errorMessage: error.response.data }));
    }
  };

  return {
    // propiedades
    access_token,
    refresh_token,
    status,
    errorMessage,
    user,
    // metodos
    startLogin,
    startRegister
    // openDateModal,
  };
};
