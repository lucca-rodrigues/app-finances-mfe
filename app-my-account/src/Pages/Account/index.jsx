import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "app_finances_root/Components";
import { Container, Box, Stack } from "@mui/material";

export default function Account(props) {
  const { watch, handleSubmit, control } = useForm();
  const watchFields = watch();

  function send(data) {
    console.log(data);
  }
  return (
    <Container>
      <Stack
        sx={{
          maxWidth: 500,
          margin: "0 auto",
        }}
      >
        <form onSubmit={handleSubmit(send)}>
          <Box>
            <h1>Form account here</h1>
            {props.userToken}
          </Box>
          <Box>
            <Controller
              control={control}
              defaultValue=""
              name="name"
              render={({ field: { onChange, value, name } }) => (
                <Input label="Nome" name={name} value={value} onChange={onChange} />
              )}
            />
          </Box>
          <Box>
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
          <Box>
            <Controller
              control={control}
              defaultValue=""
              name="password_confirmation"
              render={({ field: { onChange, value, name } }) => (
                <Input label="Confirmação de senha" name={name} value={value} onChange={onChange} />
              )}
            />
          </Box>
          <Box>
            <button type="submit">Enviar</button>
          </Box>
        </form>
      </Stack>
    </Container>
  );
}
