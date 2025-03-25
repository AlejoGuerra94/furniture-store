import styles from './Button.module.scss'

interface IButton{
children: React.ReactNode;
onClick?: React.MouseEventHandler<HTMLButtonElement>;
type?: 'button' | 'submit';
variant?:string;
disabled?: boolean;
className?: string;

}

export const Button = ({
    className="",
    children,
    onClick,
    type="button",
    disabled=false,
    variant="primary"

}:IButton) => {
    const classProps = `${styles.button} ${styles[variant]} ${className}`
  return (
    <button
    type={type === 'submit' ? 'submit' : 'button' }
    onClick={onClick}
    disabled={disabled}
    className={classProps}
    >
        {children}
    </button>
  )
}

export default Button;