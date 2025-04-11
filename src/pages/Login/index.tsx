import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";

import { Button } from "../../components";
import { Input } from "../../components/Input";

import styles from "./Login.module.scss";
import { useAuth } from "../../auth/AuthProvider";

interface ILogin {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, touchedFields },
    setError,
  } = useForm<ILogin>({ mode: "onTouched" });

  const auth = useAuth();

  const onSubmit = async (data: ILogin) => {
    try {
      await auth.login(data.email, data.password);
    } catch (error) {
      setError("root", {
        type: "manual",
        message: "Credenciales incorrectas. Por favor, inténtalo de nuevo.",
      });
    }
  };

  if (auth.isAuthenticated) {
    return <Navigate to="/tienda" replace />;
  }

  const inputs = [
    {
      name: "email",
      label: "Email",
      inputType: "email",
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
        <div className={styles.card}>
          <div className={styles.heading}>
            <p>Ingresa al portal cliente</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            {inputs.map((input) => (
              <Input key={input.name} {...input} />
            ))}
            <Button
              type="submit"
              disabled={!isValid || isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting ? "Iniciando sesión..." : "Iniciar sesión"}
            </Button>
          </form>
          <div className={styles.links}>
            <Link to="/recuperar-contrasena" style={{ textDecoration: "none" }}>
              ¿Olvidaste tu contraseña?
            </Link>
            <Link to="/registro" style={{ textDecoration: "none" }}>
              Crear cuenta
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "#037bc0" }}>
              Regresar a la tienda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
