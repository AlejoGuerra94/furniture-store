import styles from "./Menu.module.scss";
import SvgIcon, { SvgIconProps } from "../Svg/Svg";
import { Link } from "react-router-dom";

export interface ILink {
  children: string;
  href: string;
  icon?: SvgIconProps;
}

export const MenuItem = ({ children, href, icon }: ILink) => {
  return (
    <div className={styles.menuItemContainer}>
      <div className={styles.icon}>{icon && <SvgIcon {...icon} />}</div>
      <Link
        className={styles.menuItem} 
        to={href}
      >
        {children}
      </Link>
    </div>
  );
};

export default MenuItem;
