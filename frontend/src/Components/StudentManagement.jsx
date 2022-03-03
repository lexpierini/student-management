import { Box, Grid, Link, Typography } from "@mui/material";
import Content from "./Content";
import Header from "./Header";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
        <Grid
          item
          xs={12}
          sx={{ height: "5vh", backgroundColor: "secondary.main" }}
        >
          <Box mx={3} height='inherit' display="flex" justifyContent="center">
            <Box mr={3}>
              <Typography variant="body2" color="white">
                <em>Développé par: Alex Pierini</em>
              </Typography>
            </Box>
            <Box mr={1} mt={-0.5}>
              <Link
                color="white"
                underline="none"
                href="https://github.com/lexpierini"
                target="_blank"
                rel="noopener"
              >
                <GitHubIcon />
              </Link>
            </Box>
            <Box mt={-0.5}>
              <Link
                color="white"
                underline="none"
                href="https://www.linkedin.com/in/alex-pierini/?locale=fr_FR"
                target="_blank"
                rel="noopener"
              >
                <LinkedInIcon />
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StudentManagement;
