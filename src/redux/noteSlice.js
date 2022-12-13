import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};
const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    removeNote: (state, action) => {
      const newNotes = state.notes.filter((note) => note.id !== action.payload);
      state.notes = newNotes;
    },
  },
});
export const { addNote, removeNote } = noteSlice.actions;
export default noteSlice.reducer;
