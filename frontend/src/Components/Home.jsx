import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../services/axiosService";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function Home(props) {
  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [navigate, token]);

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
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
