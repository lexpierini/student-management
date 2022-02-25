import { Box, Icon, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import MUIDataTable from "mui-datatables";

function Content(props) {
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

  return (
    <Box mx={3} mt={1} mb={3}>
      <MUIDataTable
        options={{
          textLabels: tableTextlabels,
          print: false,
          download: false,
          selectToolbarPlacement: "none",
          selectableRowsHideCheckboxes: true,
          selectableRowsOnClick: true,
          setTableProps: () => ({ size: "small" }),
          customToolbar: () => (
            <Box display="inline">
              <IconButton>
                <AddCircleIcon />
              </IconButton>
              <IconButton>
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
