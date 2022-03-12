import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MUIDataTable from "mui-datatables";
import { getStudents, selectAllStudents } from "./../store/studentSlice";

function Content(props) {
  const dispatch = useDispatch();

  const studentObj = { id: 0, name: "", email: "", age: 0 };

  const students = useSelector(selectAllStudents);
  const [rowSeleted, setRowSelected] = useState([]); // dataIdex
  const [student, setStudent] = useState(studentObj);

  const tableOptions = {};

  const tableTextlabels = {
    body: {
      noMatch: "Désolé, aucune donnée correspondante à afficher.",
    },
    toolbar: {
      search: "Recherchez",
      viewColumns: "Voir les colonnes",
      filterTable: "Filtres",
    },
    viewColumns: {
      title: "Afficher les colonnes",
      titleAria: "Afficher les colonnes",
    },
    filter: {
      reset: "Rétablir",
      title: "FILTRES",
    },
    selectedRows: {
      text: "ligne(s) sélectionnée(s)",
      delete: "Supprimer",
      deleteAria: "Supprimer la ligne sélectionnée",
    },
    pagination: {
      rowsPerPage: "Lignes par page:",
      displayRows: "sur",
    },
  };

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);

  return (
    <Box mx={3} mt={1} mb={3}>
      <MUIDataTable
        data={students}
        columns={[
          {
            name: "name",
            label: "Nom",
          },
          {
            name: "email",
            label: "E-mail",
          },
          {
            name: "age",
            label: "Âge",
          },
        ]}
        options={{
          textLabels: tableTextlabels,
          print: false,
          download: false,
          selectToolbarPlacement: "none",
          selectableRowsHideCheckboxes: true,
          selectableRowsOnClick: true,
          selectableRows: "single",
          setTableProps: () => ({ size: "small" }),
          onRowSelectionChange: (
            currentRowsSelected,
            allRowsSelected,
            rowsSelected
          ) => {
            setRowSelected(rowsSelected);
          },
          customToolbar: () => (
            <Box display="inline">
              <IconButton>
                <AddCircleIcon />
              </IconButton>
              <IconButton disabled={rowSeleted.length === 0}>
                <EditIcon />
              </IconButton>
              <IconButton disabled={rowSeleted.length === 0}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ),
        }}
      />
    </Box>
  );
}

export default Content;
