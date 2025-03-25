import { HTMLInputTypeAttribute } from "react";

import styles from './Input.module.scss'

export interface IInput<TInputRegister, TInputRules> {
  containerClassName?: string;
  error?: string;
  errorClassName?: string;
  inputClassName?: string;
  isTouched?: boolean;
  isTextarea?: boolean;
  inputType: HTMLInputTypeAttribute;
  label: string;
  name: string;
  readOnly?: boolean;
  register?: any | TInputRegister;
  rules?: Partial<TInputRules>;
}

export function Input<TInputRegister, TInputRules>({
  containerClassName = "",
  error = "",
  errorClassName = "",
  inputClassName = "",
  isTouched = false,
  isTextarea = false,
  inputType,
  label = "",
  name,
  readOnly = false,
  register,
  rules,
}: IInput<TInputRegister, TInputRules>) {
  const InputComponent = isTextarea ? "textarea" : "input";
  const registerValue = register ? { ...register(name, rules) } : null;

  return (
    <div className={`${styles.wrapper} ${containerClassName}`}>
      <div className={styles.container}>
        <InputComponent
          className={`${styles.input} ${error && styles.input__error} ${
            isTouched && !error && styles.input__complete
          } ${inputClassName}`}
          id={name}
          type={inputType}
          readOnly={readOnly}
          placeholder={label}
          {...registerValue}
        />
      </div>

      {error && (
        <span
          id={`${name}-error`}
          role="alert"
          className={`${styles.error} ${errorClassName}`}
        >
          {error}
        </span>
      )}
    </div>
  );
}
