import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";
const initialState = {
  events: [
    {
      _id: new Date().getTime(),
      title: "Cumpleanos del jefe",
      notes: "hay que comprar el pastel",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#fafafa",
      user: {
        _id: 123,
        name: "jesus",
      },
    },
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
        event._id === payload._id ? payload : event
      );
    },
    onDeletedEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event._id != state.activeEvent._id
        );
        state.activeEvent = null;
      }
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeletedEvent,
} = calendarSlice.actions;
