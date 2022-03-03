import { Box, Grid } from "@mui/material";
import Content from "./Content";
import Header from "./Header";

function StudentManagement(props) {
  return (
    <Box sx={{ bgcolor: "background.default", height: "100vh" }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{ height: "10vh", backgroundColor: "primary.main" }}
        >
          <Header />
        </Grid>
        <Grid item xs={12} sx={{ height: "85vh" }}>
          <Content />
        </Grid>
        <Grid item xs={12} sx={{ height: "5vh" }}>
          Footer
        </Grid>
      </Grid>
    </Box>
  );
}

export default StudentManagement;
