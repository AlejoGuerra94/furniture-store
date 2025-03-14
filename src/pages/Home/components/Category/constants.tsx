import { ICard } from "../../../../components/Card";
import { Categoria1, Categoria2, Categoria3 } from "../../../../assets";

import styles from './Category.module.scss'

export const categoryProducts: ICard[] = [
  {
    image: { src: Categoria1 },
    description: <a className={styles.link} href="#">Oficina</a>,
  },
  {
    image: { src: Categoria2 },
    description: <a className={styles.link} href="#">Hogar</a>,
  },
  {
    image: { src: Categoria3 },
    description: <a className={styles.link} href="#">Cocina</a>,
  },
];