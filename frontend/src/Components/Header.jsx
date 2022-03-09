import { memo } from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import logo from "../assets/logoAlex72dpi.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/");
  }

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
      <Box sx={{ alignSelf: "center", flexGrow: 1 }}>
        <Typography variant="h4" color="white">
          GESTION DES ÉTUDIANTS
        </Typography>
      </Box>
      <Box sx={{ alignSelf: "center" }}>
        <Tooltip title="Déconnexion" placement="left">
          <IconButton sx={{ color: "white" }} onClick={logout}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default memo(Header);
