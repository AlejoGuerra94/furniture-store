import styles from "./Menu.module.scss";
import SvgIcon, { SvgIconProps } from "../Svg/Svg";

export interface ILink {
  children: string;
  href: string;
  icon?: SvgIconProps;
}

export const MenuItem = ({ children, href, icon }: ILink) => {
  return (
    <div className={styles.menuItemContainer}>
      <div className={styles.icon}>{icon && <SvgIcon {...icon} />}</div>
      <a key={href} href={href} className={styles.menuItem}>
        {children}
      </a>
    </div>
  );
};

export default MenuItem;
