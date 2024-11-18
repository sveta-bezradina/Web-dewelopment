import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const Authorisation = ({ user, setUser, onLogin }) => {
  return (
    <Box maxWidth={400} margin="0 auto" padding="20px">
      <Typography variant="h5" gutterBottom>
        Авторизація
      </Typography>
      <TextField
        label="Ваше ім'я"
        fullWidth
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: "20px" }}
        onClick={onLogin}
      >
        Увійти
      </Button>
    </Box>
  );
};

export default Authorisation;
