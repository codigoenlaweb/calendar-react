import { format, parse } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";
import { calendarApi } from "../../api";
import {
  onClearErrorMessage,
  onErrorMessage,
  onListEvent,
  onLogin,
  onLogout,
} from "../../store";
import { useCalendarStore } from "./useCalendarStore";

export const useAuthStore = () => {
  /* ----propiedades---- */
  // authSlice
  const { access_token, status, errorMessage, user, sendEmailRegister } =
    useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // router
  const navigate = useNavigate();
  /* ----propiedades END---- */

  /* ----metodos---- */
  const startLogin = async ({ email, password }) => {
    dispatch(onClearErrorMessage());
    try {
      // rest
      const { data } = await calendarApi.post("/dj-rest-auth/login/", {
        email,
        password,
      });
      localStorage.setItem("access_token", `Token ${data.key}`);
    } catch (error) {
      console.log("error ", error);
      dispatch(onLogout({ errorMessage: error.response.data }));
    }

    try {
      const { data } = await calendarApi.get("/dj-rest-auth/user/");
      console.log(await data);
      // dispatch onlogin autheticated
      dispatch(
        onLogin({
          user: {
            id: data.id,
            email: data.email,
            username: data.username,
          },
          access_token: localStorage.getItem("access_token"),
        })
      );
      const newEvents = data.events.map((event) => {
        const date = new Date(event.start);
        const date2 = new Date(event.end);
        return {
          ...event,
          bgColor: "#fafafa",
          start: date,
          end: date2,
          // start: result,
          user: {
            id: data.id,
            name: data.username,
          },
        };
      });
      dispatch(onListEvent({ events: newEvents }));
    } catch (error) {
      console.log("error ", error);
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
      await Swal.fire({
        icon: "success",
        title: "Sign up completed",
        text: "verification email address sent",
      });
      navigate("/auth/login");
    } catch (error) {
      console.log("error ", error);
      dispatch(onLogout({ errorMessage: error.response.data }));
    }
  };

  const starLogout = async () => {
    try {
      const { data } = await calendarApi.post("/dj-rest-auth/logout/");
      localStorage.clear();
      dispatch(onLogout({ errorMessage: "logout" }));
    } catch (error) {
      console.log(error);
    }
  };

  const clearErrorMessage = () => {
    dispatch(onClearErrorMessage());
  };

  const setErrorMessage = (errorMessage) => {
    dispatch(onErrorMessage({ errorMessage }));
  };

  const startCheckToken = async () => {
    const token = localStorage.getItem("access_token");
    if (!token) return dispatch(onLogout({ errorMessage: "no auth" }));

    try {
      const { data } = await calendarApi.get("/dj-rest-auth/user/");

      dispatch(
        onLogin({
          user: {
            id: data.id,
            email: data.email,
            username: data.username,
          },
          events: data.events,
          access_token: localStorage.getItem("access_token"),
        })
      );
      const newEvents = data.events.map((event) => {
        const date = new Date(event.start);
        const date2 = new Date(event.end);
        return {
          ...event,
          bgColor: "#fafafa",
          start: date,
          end: date2,
          // start: result,
          user: {
            id: data.id,
            name: data.username,
          },
        };
      });
      dispatch(onListEvent({ events: newEvents }));
    } catch (error) {
      console.log(error);
      // localStorage.clear();
      dispatch(dispatch(onLogout({ errorMessage: "no auth" })));
    }
  };

  /* ----metodos END---- */

  return {
    // propiedades
    access_token,
    status,
    errorMessage,
    user,
    // metodos
    startLogin,
    startRegister,
    starLogout,
    clearErrorMessage,
    startCheckToken,
    setErrorMessage,
    // openDateModal,
  };
};
