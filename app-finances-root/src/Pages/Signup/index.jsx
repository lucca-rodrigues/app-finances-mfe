import React from "react";
import Input from "../../Components/Input";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import { useNavigationController } from "../../Context/NavigationController";

// import { Container } from './styles';

function Signup() {
  const { watch, handleSubmit, control } = useForm();
  const { navigate } = useNavigationController();
  const watchFields = watch();

  function submitForm(data) {
    console.log(data);
  }
  return (
    <Box
      sx={{
        backgroundColor: "#ff6c24",
        height: "100%",
        minHeight: "80vh",
        paddingTop: 21,
      }}
    >
      <Container>
        <Box
          sx={{
            maxWidth: 500,
            margin: "0 auto",
            backgroundColor: "#fff",
            borderRadius: 5,
            padding: 5,
          }}
        >
          <Typography mb={5} variant="h1" fontSize={20} fontWeight="bold">
            Crie sua conta
          </Typography>
          <form onSubmit={handleSubmit(submitForm)}>
            <Box mb={2}>
              <Controller
                control={control}
                defaultValue=""
                name="name"
                render={({ field: { onChange, value, name } }) => (
                  <Input label="Nome" name={name} value={value} onChange={onChange} />
                )}
              />
            </Box>
            <Box mb={2}>
              <Controller
                control={control}
                defaultValue=""
                name="email"
                render={({ field: { onChange, value, name } }) => (
                  <Input label="E-mail" name={name} value={value} onChange={onChange} />
                )}
              />
            </Box>
            <Box>
              <Controller
                control={control}
                defaultValue=""
                name="password"
                render={({ field: { onChange, value, name } }) => (
                  <Input label="Senha" name={name} value={value} onChange={onChange} />
                )}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                margin: 5,
              }}
            >
              <Button
                type="submit"
                style={{
                  backgroundColor: "#ff6c24",
                  color: "#fff",
                  padding: 10,
                  width: "150px",
                  fontWeight: 600,
                }}
              >
                Cadastrar
              </Button>
            </Box>
          </form>
          <Box
            textAlign="center"
            sx={{
              ":hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => navigate("/")}
          >
            Ja tenho uma conta?
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Signup;
