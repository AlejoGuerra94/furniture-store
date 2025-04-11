import { ILink } from "./MenuItem";
import styles from './Menu.module.scss'

export const menuItems: ILink[] = [
  { children: "Home", href: "/"},
  { children: "Nosotros", href: "/nosotros" },
  { children: "Tienda", href: "/tienda" },
  { children: "Iniciar sesión", href: "/login" ,className:styles.login},
];