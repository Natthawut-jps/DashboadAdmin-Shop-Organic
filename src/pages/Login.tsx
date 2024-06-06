import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Dialog,
  DialogContent,
} from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { LockOutlined } from "@mui/icons-material";
import axios from "axios";
import { Cookies } from "react-cookie";

const Login: FunctionComponent = () => {
  interface data_Type {
    username: string;
    password: string;
  }
  const [data, setData] = useState<data_Type>({} as data_Type);
  const [errors, setError] = useState<string>("");
  const handleLogin = async () => {
    if (data.username === "admin" && data.password === "0000") {
      const url_dev = "http://localhost:8080/public/admin_login/admin";
      await axios({
        method: "post",
        url: url_dev,
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      }).then((res) => {
        if (res.status === 200) {
          const cookie = new Cookies();
          const date = new Date();
          const token = new Date(date.setMinutes(date.getMinutes() + 3));
          const refresh_token = new Date(date.setDate(date.getDate() + 5));
          cookie.set("_uta", res.data._uta, {
            expires: token,
            path: "/",
            secure: true,
            sameSite: "strict",
          });
          cookie.set("_ura", res.data._ura, {
            expires: refresh_token,
            path: "/",
            secure: true,
            sameSite: "strict",
          });
          return (location.href = "/");
        }
      });
    } else {
      setError("incorrect username or password !");
    }
  };

  return (
    <>
      <Dialog open={true} fullWidth>
        <DialogContent>
          <Container maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                py: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
                <LockOutlined />
              </Avatar>
              <Typography variant="h5" sx={{ paddingBottom: "10px" }}>
                Login
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "13px",
                  color: "red",
                  top: "155px",
                  left: "110px",
                  position: "absolute",
                }}
              >
                {errors}
              </Typography>
              <Box sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoFocus
                  value={data?.username}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setData({ ...data, username: e.target.value })
                  }
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={data.password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setData({ ...data, password: e.target.value });
                  }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Box>
            </Box>
          </Container>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Login;
