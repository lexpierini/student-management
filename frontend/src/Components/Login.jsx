import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Grid,
  InputAdornment,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LockIcon from "@mui/icons-material/Lock";
import FaceIcon from "@mui/icons-material/Face";
import { authentifier } from "../store/authentificationSlice";

function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [signUpForm, setSignUpForm] = useState(false);
  const [msg, setMsg] = useState({ text: "", type: "" }); //Type: error || warning || info || success
  const [openMsg, setOpenMsg] = useState(false);

  function handleInputChange(event) {
    setLogin({ ...login, [event.target.name]: event.target.value });
  }

  function handleLogin() {
    dispatch(authentifier(login)).then((resp) => {
      if (resp.meta.requestStatus === "fulfilled") {
        navigate("/home");
      } else {
        if (resp.payload.ErrorMsg) {
          setMsg({ text: resp.payload.ErrorMsg[0], type: "error" });
        } else if (resp.payload.errors) {
          let text = "";

          for (const [key, value] of Object.entries(resp.payload.errors)) {
            text += `${value.join(". ")}. `;
          }

          setMsg({ text: text, type: "error" });
        }
        setOpenMsg(true);
      }
    });
  }

  const handleCloseMsg = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenMsg(false);
    setMsg({ text: "", type: "" });
  };

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ my: 10, textAlign: "center" }}>
            <Typography variant="h4" color="secondary">
              <strong>GESTION DES ÉTUDIANTS</strong>
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ m: 2, display: "flex", justifyContent: "center" }}>
            <Paper
              elevation={3}
              sx={{
                width: "400px",
                height: "450px",
                bgcolor: "primary.main",
              }}
            >
              <Box sx={{ textAlign: "center", mt: 3, height: "98px" }}>
                {signUpForm ? (
                  <FaceIcon sx={{ color: "white", mr: 1, fontSize: 30 }} />
                ) : (
                  <LockIcon sx={{ color: "white", mr: 1, fontSize: 30 }} />
                )}
                <Typography variant="h4" sx={{ color: "white", mt: 1 }}>
                  <strong>{signUpForm ? "S'INSCRIRE" : "LOGIN"}</strong>
                </Typography>
              </Box>
              <Box sx={{ height: "210px" }}>
                <Box sx={{ mt: 3, px: 5 }}>
                  <TextField
                    fullWidth
                    required
                    focused
                    type="email"
                    color="secondary"
                    label="E-mail"
                    name="email"
                    value={login.email}
                    onChange={handleInputChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon sx={{ color: "white" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "#FFFFFF",
                      },
                    }}
                  />
                </Box>
                <Box sx={{ mt: 3, px: 5 }}>
                  <TextField
                    fullWidth
                    required
                    focused
                    type="password"
                    autoComplete="current-password"
                    color="secondary"
                    label="Mot de passe"
                    name="password"
                    value={login.password}
                    onChange={handleInputChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <VpnKeyIcon sx={{ color: "white" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "#FFFFFF",
                      },
                    }}
                  />
                </Box>
                {signUpForm && (
                  <Box sx={{ mt: 3, px: 5 }}>
                    <TextField
                      fullWidth
                      required
                      focused
                      type="password"
                      autoComplete="current-password"
                      color="secondary"
                      label="Confirmer le mot de passe"
                      name="confirmPassword"
                      value={login.confirmPassword}
                      onChange={handleInputChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <VpnKeyIcon sx={{ color: "white" }} />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "#FFFFFF",
                        },
                      }}
                    />
                  </Box>
                )}
              </Box>
              <Box display="flex" justifyContent="space-evenly" mt={4}>
                {signUpForm ? (
                  <>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => setSignUpForm(!signUpForm)}
                    >
                      Retourner
                    </Button>
                    <Button variant="contained" color="secondary">
                      Créez votre compte
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => setSignUpForm(!signUpForm)}
                    >
                      S'inscrire
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleLogin}
                    >
                      Login
                    </Button>
                  </>
                )}
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        open={openMsg}
        autoHideDuration={8000}
        onClose={handleCloseMsg}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseMsg} severity={msg.type}>
          {msg.text}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Login;
