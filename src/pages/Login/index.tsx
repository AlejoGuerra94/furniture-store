import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { Button } from "../../components";
import { Input } from "../../components/Input";
import { Menu } from "../../components/NavBar/Menu";

import styles from "./Login.module.scss";

interface ILogin {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
  } = useForm<ILogin>({ mode: "onTouched" });

  const inputs = [
    {
      name: "email",
      label: "Email",
      inputType: "text",
      isTouched: touchedFields.email,
      register,
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
      isTouched: touchedFields.password,
      register,
      rules: {
        required: "*Ingrese una contraseña.",
        pattern: {
          value: /^((?=.*[\W]))(?=.*[\d])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
          message: "*La contraseña ingresada es incorrecta.",
        },
      },
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Menu />
        <div className={styles.card}>
         <div className={styles.heading}>
          <h3>
            Ingresa al portal cliente
          </h3>
        </div>

        <form action="" className={styles.form}>
            {inputs.map((input) =>(
                <Input key={input.name} {...input}/>
            ))}
          <Button type="submit" >Iniciar sesión</Button>
        </form>
        <Link
              to="/recuperar-contrasena"
              style={{ textDecoration: 'none' }}
            >
              <p>
              ¿Olvidaste tu contraseña?
              </p>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
