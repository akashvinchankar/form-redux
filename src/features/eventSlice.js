import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  type: '',
  start: '',
  end: '',
  description: '',
  handeledBy: '',
  organisation: '',
  subEvents: 0,
  data: [],
  submitForm: false,
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    formSubmitHandler: (state, action) => {
      const { payload } = action;
      state[payload.key] = payload.value;
    },
  },
});

export const { formSubmitHandler } = eventSlice.actions;

export default eventSlice.reducer;
