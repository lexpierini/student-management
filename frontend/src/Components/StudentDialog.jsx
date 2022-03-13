import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { addStudent } from "../store/studentSlice";

function StudentDialog({ open, onClose, student }) {
  const dispatch = useDispatch();
  const [newStudent, setNewStudent] = useState(student);
  const [saveEnable, setSaveEnable] = useState(false);

  function handleInputChange(event) {
    setNewStudent({ ...newStudent, [event.target.name]: event.target.value });
    saveOk();
  }

  function handleOnClose() {
    setNewStudent(student);
    onClose();
  }

  function handleSave() {
    if (newStudent.id === 0) {
      dispatch(addStudent(newStudent));
      handleOnClose();
    }
  }

  const saveOk = useCallback(() => {
    const regEmail = /.+@.+\.[A-Za-z]+$/;

    if (newStudent.name === "") return false;
    if (!regEmail.test(newStudent.email)) return false;
    if (newStudent.age <= 0) return false;

    return true;
  }, [newStudent.age, newStudent.email, newStudent.name]);

  useEffect(() => {
    setSaveEnable(saveOk());
  }, [newStudent, saveOk]);

  return (
    <Box>
      <Dialog open={open} onClose={handleOnClose}>
        <DialogTitle>
          {student.id === 0 ? "Ajouter un étudiant" : "Modifier un étudiant"}
        </DialogTitle>
        <DialogContent>
          <Box width="40ch" mb={2}>
            <TextField
              fullWidth
              variant="standard"
              label="Nom"
              name="name"
              value={newStudent.name}
              onChange={handleInputChange}
            />
          </Box>
          <Box width="40ch" mb={2}>
            <TextField
              fullWidth
              variant="standard"
              label="Courriel"
              name="email"
              value={newStudent.email}
              onChange={handleInputChange}
            />
          </Box>
          <Box width="7ch">
            <TextField
              type="number"
              variant="standard"
              label="Âge"
              name="age"
              value={newStudent.age}
              onChange={handleInputChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnClose}>Annuler</Button>
          <Button disabled={!saveEnable} onClick={handleSave}>
            Enregistrer
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default StudentDialog;
