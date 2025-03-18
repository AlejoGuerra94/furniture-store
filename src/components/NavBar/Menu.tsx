import MenuItem from "./MenuItem";

import styles from './Menu.module.scss'
import { menuItems } from "./constans";


export const Menu = () => {
  return (
    <nav className={styles.container}>
      {menuItems.map((item) => (
        <MenuItem key={item.href} {...item} />
      ))}
    </nav>
  );
};
