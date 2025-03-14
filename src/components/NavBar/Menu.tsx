import MenuItem, { ILink } from "./MenuItem";

import styles from './Menu.module.scss'

interface IMenu {
  items: ILink[];
  className?: string;
}

export const Menu = ({items,className}:IMenu) => {
  return (
    <nav className={`${styles.container} ${className}`}>
      {items.map((item) => (
        <MenuItem key={item.href} {...item} />
      ))}
    </nav>
  );
};
