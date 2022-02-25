import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import logo from "../assets/logoAlex72dpi.png";

function Home(props) {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sx={{ height: "100px", backgroundColor: "primary.main" }}
      >
        <Box display="flex" sx={{ height: "inherit", m: 2 }}>
          <Box>
            <img
              src={logo}
              alt="logo"
              style={{
                maxWidth: "70%",
                maxHeight: "100%",
                position: "relative",
              }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        Body
      </Grid>
      <Grid item xs={12}>
        Footer
      </Grid>
    </Grid>
  );
}

export default Home;
