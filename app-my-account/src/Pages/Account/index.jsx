import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "app_finances_root/Components";

export default function Account() {
  const { watch, handleSubmit, control } = useForm();
  const watchFields = watch();

  function send(data) {
    console.log(data);
  }
  return (
    <>
      <h1>Form account here</h1>
      <form onSubmit={handleSubmit(send)}>
        <Controller
          control={control}
          defaultValue=""
          name="name"
          render={({ field: { onChange, value, name } }) => (
            <Input label="Nome" name={name} value={value} onChange={onChange} />
          )}
        />
        <Controller
          control={control}
          defaultValue=""
          name="email"
          render={({ field: { onChange, value, name } }) => (
            <Input label="E-mail" name={name} value={value} onChange={onChange} />
          )}
        />
        <Controller
          control={control}
          defaultValue=""
          name="password"
          render={({ field: { onChange, value, name } }) => (
            <Input label="Senha" name={name} value={value} onChange={onChange} />
          )}
        />
        <Controller
          control={control}
          defaultValue=""
          name="password_confirmation"
          render={({ field: { onChange, value, name } }) => (
            <Input label="Confirmação de senha" name={name} value={value} onChange={onChange} />
          )}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
