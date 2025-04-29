import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components";
import { Input } from "../../components/Input";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";

import styles from "./SignUp.module.scss";

interface ISignUp {
  userName: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<ISignUp>({ mode: "onTouched" });

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const auth = useAuth();

  const inputs = [
    {
      name: "userName",
      label: "Usuario",
      inputType: "text",
      error: errors.userName?.message || "",
      rules: {
        required: "*Ingrese un usuario",
        minLength: {
          value: 3,
          message: "*Mínimo 3 caracteres",
        },
        maxLength: {
          value: 20,
          message: "*Máximo 20 caracteres",
        },
        pattern: {
          value: /^[a-zA-Z0-9_]+$/,
          message: "*Solo letras, números y guiones bajos",
        },
      },
    },
    {
      name: "email",
      label: "Email",
      inputType: "email",
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
        required: "*Ingrese una contraseña",
        minLength: {
          value: 6,
          message: "*Mínimo 6 caracteres",
        },
        pattern: {
          value: /^(?=.*[A-Za-z])(?=.*\d).{6,}$/,
          message: "*Debe contener letras y al menos un número",
        },
      },
    },
  ];

  const onSubmit = async (data: ISignUp) => {
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      await auth.signUp(data.userName, data.email, data.password);

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Error en el registro";
      setSubmitError(errorMessage);

      if (typeof errorMessage === "string") {
        if (errorMessage.toLowerCase().includes("email")) {
          setError("email", {
            type: "manual",
            message: "Este email ya está registrado",
          });
        }
        if (errorMessage.toLowerCase().includes("usuario")) {
          setError("userName", {
            type: "manual",
            message: "Nombre de usuario no disponible",
          });
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (auth.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.heading}>
            <h3>Crea una cuenta del portal</h3>
          </div>

          {submitError && (
            <div className={styles.errorMessage}>{submitError}</div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            {inputs.map((input) => (
              <Input key={input.name} {...input} register={register} />
            ))}
            <Button
              type="submit"
              disabled={!isValid || isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting ? "Creando cuenta..." : "Crear cuenta"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
