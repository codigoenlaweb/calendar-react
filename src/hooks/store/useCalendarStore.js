import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { calendarApi } from "../../api";
import {
  onAddNewEvent,
  onDeletedEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../../store";
import { useAuthStore } from "./useAuthStore";
import { useUiStore } from "./useUiStore";

export const useCalendarStore = () => {
  // propiedades
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user, setErrorMessage } = useAuthStore();
  const { closeDateModal } = useUiStore();
  const dispatch = useDispatch();

  // metodos
  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    setErrorMessage();
    console.log(calendarEvent);
    if (calendarEvent.id != null) {
      // update
      try {
        // rest
        const { data } = await calendarApi.patch(
          `/event/${calendarEvent.id}/`,
          {
            title: calendarEvent.title,
            note: calendarEvent.note,
            start: calendarEvent.start,
            end: calendarEvent.end,
          }
        );

        // redux event
        dispatch(
          onUpdateEvent({
            id: data.id,
            user: { id: user.id, name: user.username },
            ...calendarEvent,
            note: calendarEvent.note
          })
        );

        // message succes
        Swal.fire({
          title: "Note event success!",
          text: "To be update note event",
          icon: "success",
          confirmButtonText: "Ok",
        });

        closeDateModal();
      } catch ({ response }) {
        console.log(response.data);
        setErrorMessage(response.data);
      }

      Swal.fire({
        title: "Note event success!",
        text: "To be created a new note event",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } else {
      // create
      try {
        // rest
        const { data } = await calendarApi.post("/event/", {
          title: calendarEvent.title,
          note: calendarEvent.note,
          start: calendarEvent.start,
          end: calendarEvent.end,
        });

        // redux event
        dispatch(
          onAddNewEvent({
            id: data.id,
            user: { id: user.id, name: user.username },
            ...calendarEvent,
          })
        );

        // message succes
        Swal.fire({
          title: "Note event success!",
          text: "To be created a new note event",
          icon: "success",
          confirmButtonText: "Ok",
        });

        closeDateModal();
      } catch ({ response }) {
        console.log(response.data);
        setErrorMessage(response.data);
      }
    }
  };

  const startdeletingEvent = async () => {
    try {
      const { data } = await calendarApi.delete(`/event/${activeEvent.id}`);
    } catch (error) {
      console.log(error);
    }
    dispatch(onDeletedEvent());
  };

  return {
    // propiedades
    events,
    activeEvent,
    // metodos
    setActiveEvent,
    startSavingEvent,
    startdeletingEvent,
  };
};
