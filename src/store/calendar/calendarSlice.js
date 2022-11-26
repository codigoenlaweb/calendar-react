import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";
const initialState = {
  events: [
    // {
    //   id: new Date().getTime(),
    //   title: "Cumpleanos del jefe",
    //   note: "hay que comprar el pastel",
    //   start: new Date(),
    //   end: addHours(new Date(), 2),
    //   bgColor: "#fafafa",
    //   user: {
    //     id: 123,
    //     name: "jesus",
    //   },
    // },
  ],
  activeEvent: null,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) =>
        event.id === payload.id ? payload : event
      );
    },
    onDeletedEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event.id != state.activeEvent.id
        );
        state.activeEvent = null;
      }
    },
    onListEvent: (state, { payload }) => {
      state.events = payload.events;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeletedEvent,
  onListEvent,
} = calendarSlice.actions;
