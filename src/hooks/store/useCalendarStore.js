import { useSelector, useDispatch } from "react-redux";
import { onAddNewEvent, onDeletedEvent, onSetActiveEvent, onUpdateEvent } from "../../store";

export const useCalendarStore = () => {
  // propiedades
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  // metodos
  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    // backend
    if (calendarEvent._id) {
      // actualizando
      dispatch(onUpdateEvent({...calendarEvent}));
    } else {
      // creando
      dispatch(onAddNewEvent({ _id: new Date().getTime(), ...calendarEvent }));
    }
  };

  const startdeletingEvent = () => {
    dispatch( onDeletedEvent() )
  }

  return {
    // propiedades
    events,
    activeEvent,
    // metodos
    setActiveEvent,
    startSavingEvent,
    startdeletingEvent
  };
};
