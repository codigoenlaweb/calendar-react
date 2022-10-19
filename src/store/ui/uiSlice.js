import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isDateModalOpen: false
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    onOpenDateModal: (state) => {
      state.isDateModalOpen = true;
    },
    onCloseDateModal: (state) => {
        state.isDateModalOpen = false;
    },

    // openDateModal: (state, {payload}) => {
    //     state.counter += payload.number;
    // }
  },
});
// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;