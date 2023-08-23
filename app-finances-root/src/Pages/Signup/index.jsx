import React from "react";
import Input from "../../Components/Input";
import { useForm, Controller } from "react-hook-form";

// import { Container } from './styles';

function Signup() {
  const { watch, handleSubmit, control } = useForm();
  const watchFields = watch();

  function send(data) {
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(send)}>
        <Controller
          control={control}
          defaultValue="Batata"
          name={"test"}
          render={({ field: { onChange, value, name } }) => (
            <Input label="input test" name={name} value={value} onChange={onChange} />
          )}
        />

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Signup;
