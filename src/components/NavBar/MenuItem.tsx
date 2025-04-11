import styles from "./Menu.module.scss";
import SvgIcon, { SvgIconProps } from "../Svg/Svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export interface ILink {
  children: string;
  href: string;
  icon?: SvgIconProps;
  className?: string;
  isActive?:boolean;
}

export const MenuItem = ({ children, href, icon,className }: ILink) => {
  const [isActive,setIsACtive] = useState(true)
  return (
    <div className={styles.menuItemContainer}>
      <div className={styles.icon}>{icon && <SvgIcon {...icon} />}</div>
      <Link
        className={ isActive ?`${styles.menuItem} ${className}` : styles.isActive} 
        to={href}
        onClick={() => setIsACtive(!isActive)}
      >
        {children}
      </Link>
    </div>
  );
};

export default MenuItem;
