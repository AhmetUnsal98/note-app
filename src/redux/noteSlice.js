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
    editNote: (state, action) => {
      const editNote = state.notes.find(
        (note) => note.id === action.payload[0]
      );
      editNote.text = action.payload[1];
    },
  },
});
export const { addNote, removeNote, editNote } = noteSlice.actions;
export default noteSlice.reducer;
