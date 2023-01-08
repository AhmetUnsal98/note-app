import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addNote, removeNote, editNote } from "./redux/noteSlice";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  align-items: center;
`;
const Input = styled.input`
  width: 452px;
  height: 54px;
  border: 1px solid lightgray;
  margin: 4px;
`;
const Button = styled.button`
  width: 152px;
  height: 54px;
  border: 1px solid lightgray;
  background-color: teal;
  color: white;
  font-size: 18px;
`;
const NotesContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Card = styled.div`
  width: 342px;
  height: 340px;
  background-color: lightgray;
  color: white;
  margin: 8px;
  border-radius: 4px;
`;
const DeleteButton = styled.div`
  color: white;
  text-align: end;
  font-size: 24px;
  padding-right: 8px;
  padding-top: 8px;
  cursor: pointer;
`;
const EditButton = styled.div`
  color: white;
  text-align: end;
  font-size: 24px;
  padding-right: 8px;
  padding-top: 8px;
  cursor: pointer;
`;
const Text = styled.p`
  color: white;
  font-size: 22px;
  margin: 12px;
`;
function App() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.note.notes);

  const [text, setText] = useState();
  const [onEdit, SetOnEdit] = useState(false);
  const [editNoteId, setEditNoteId] = useState();
  const note = {
    text: text,
    id: Math.random(),
  };
  const handleAddEvent = () => {
    dispatch(addNote(note));
  };
  const handleDeleteCard = (id) => {
    dispatch(removeNote(id));
  };
  const handleEditCard = (note) => {
    SetOnEdit(true);
    setText(note.text);
    setEditNoteId(note.id);
  };
  const finishEdit = () => {
    SetOnEdit(false);
    dispatch(editNote([editNoteId, text]));
    setText("");
  };

  return (
    <Container>
      <InputContainer>
        <Input
          value={text}
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></Input>
        {onEdit === true ? (
          <Button onClick={finishEdit}>Notu Düzenle</Button>
        ) : (
          <Button onClick={handleAddEvent}>Not Ekle</Button>
        )}
      </InputContainer>
      <NotesContainer>
        {notes?.map((note) => (
          <Card>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <EditButton
                onClick={() => {
                  handleEditCard(note);
                }}
              >
                Edit
              </EditButton>
              <DeleteButton
                onClick={() => {
                  handleDeleteCard(note.id);
                }}
              >
                X
              </DeleteButton>
            </div>
            <Text>{note.text}</Text>
          </Card>
        ))}
      </NotesContainer>
    </Container>
  );
}

export default App;
