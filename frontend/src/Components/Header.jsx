import { Box, Typography } from "@mui/material";
import logo from "../assets/logoAlex72dpi.png";

function Header(props) {
  return (
    <Box display="flex" my={0.5} mx={2}>
      <Box
        sx={{
          mr: 6,
          display: "flex",
          height: "80px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            height: "80%",
            width: "auto",
          }}
        />
      </Box>
      <Box sx={{ alignSelf: "center" }}>
        <Typography variant="h4" color="white">
          STUDENT MANAGEMENT
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
