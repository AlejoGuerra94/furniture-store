import { useForm } from "react-hook-form";
import { Button } from "../../components";
import { Input } from "../../components/Input";

import styles from "./SignUp.module.scss";
import { useAuth } from "../../auth/AuthProvider";
import { Navigate } from "react-router-dom";

interface ISignUp {
  user: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ISignUp>({ mode: "onTouched" });

  const inputs = [
    {
      name: "user",
      label: "Usuario",
      inputType: "text",
      error: errors.user?.message || "",
      rules: {
        required: "*Ingrese un usuario",
        pattern: {
          value: /^[a-zA-Z0-9]{3,20}$/,
          message: "*Ingrese un usuario válido",
        },
      },
    },
    {
      name: "email",
      label: "Email",
      inputType: "text",
      error: errors.email?.message || "",
      rules: {
        required: "*Ingrese un email",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "*Ingrese un email válido",
        },
      },
    },
    {
      name: "password",
      label: "Contraseña",
      inputType: "password",
      error: errors.password?.message || "",
      rules: {
        required: "*Ingrese una contraseña.",
        pattern: {
          value: /^((?=.*[\W]))(?=.*[\d])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
          message: "*La contraseña ingresada es incorrecta.",
        },
      },
    },
  ];

  const onSubmit = (data: any) => {
    console.log("Datos del formulario:", data);
  };

  const auth = useAuth();
  if (auth.isAutehnticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.heading}>
            <h3>Crea una cuenta del portal</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            {inputs.map((input) => (
              <Input key={input.name} {...input} register={register} />
            ))}
            <Button disabled={!isValid} type="submit">Crear cuenta</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
