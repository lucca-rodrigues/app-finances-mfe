import React from "react";
import Input from "../../Components/Input";
import { useForm, Controller } from "react-hook-form";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import "./styles.css";
import { useNavigationController } from "../../Context/NavigationController";
import { AuthService } from "../../Services";

export default function SignIn() {
  const { watch, handleSubmit, control } = useForm();
  const { navigate } = useNavigationController();
  const watchFields = watch();
  const authService = new AuthService();

  async function submitForm(data) {
    const authData = {
      email: data.email,
      password: data.password,
    };

    const response = await authService.auth(authData);

    if (response.status === 200) {
      const globalInfos = {
        backendToken: response.data.token,
      };
      const currentDomain = window.location.hostname;

      document.cookie = `app_myfinances=${JSON.stringify(globalInfos)}; domain=${currentDomain}; path=/`;

      navigate("/transactions");
    }
  }
  return (
    <Box
      sx={{
        backgroundColor: "#ff6c24",
        height: "100%",
        minHeight: "80vh",
        paddingTop: 25,
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
            Acesse sua conta
          </Typography>
          <form onSubmit={handleSubmit(submitForm)}>
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
                Entrar
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
            onClick={() => navigate("/signup")}
          >
            Não tenho uma conta?
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
