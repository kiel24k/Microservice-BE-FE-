import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GatewayServiceApi from "../api/GatewayServiceApi";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate()

  const loginApi = async () => {
    const response = await GatewayServiceApi.post("api/login", {
      email: email,
      password: password,
    });
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      return navigate("/product-list");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginApi();
  };

  return (
    <section>
      <div className="grid justify-center">
        <Paper elevation={3}>
          <div className="grid gap-3 p-3 shadow-2xl">
            <Typography variant="h5" color="black">
              Login
            </Typography>

            <form onSubmit={handleSubmit} className="grid gap-3">
              <TextField
                label="Username"
                color="black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Password"
                color="black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="flex justify-end">
                <Button variant="contained" color="secondary" type="submit">
                  Login
                </Button>
              </div>

              <div className="text-center">
                <a href="" className="text-blue-500 underline">
                  need to signup? Signup
                </a>
              </div>
            </form>
          </div>
        </Paper>
      </div>
    </section>
  );
};

export default Login;
