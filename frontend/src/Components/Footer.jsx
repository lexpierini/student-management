import { memo } from "react";
import { Box, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer(props) {
  return (
    <Box mx={3} height="inherit" display="flex" justifyContent="center">
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
  );
}

export default memo(Footer);
