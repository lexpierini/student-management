import { Grid } from "@mui/material";
import Content from "./Content";
import Header from "./Header";

function Home(props) {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sx={{ height: "100px", backgroundColor: "primary.main" }}
      >
        <Header />
      </Grid>
      <Grid item xs={12} sx={{ height: "100%" }}>
        <Content />
      </Grid>
      <Grid item xs={12}>
        Footer
      </Grid>
    </Grid>
  );
}

export default Home;
