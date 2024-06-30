"use client";
import React, { useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebaseConfig";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [isSubmit, setIsSubmit] = useState(false);
  const messageRef = useRef<{ type: "success" | "error"; message: string }>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsSubmit(true);

    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const email = data.get("email");
    const password = data.get("password");

    createUserWithEmailAndPassword(auth, email as string, password as string)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          messageRef.current = {
            type: "success",
            message: "Success Register",
          };
          setIsSubmit(false);
          return router.push("/login");
        }

        return null;
      })
      .catch((error) => {
        if (error)
          messageRef.current = {
            type: "error",
            message: error.message,
          };
        setIsSubmit(false);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {messageRef.current?.type && !isSubmit && (
          <Alert severity={messageRef.current?.type} sx={{ mt: 3 }}>
            {messageRef.current?.message}
          </Alert>
        )}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            disabled={isSubmit}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
