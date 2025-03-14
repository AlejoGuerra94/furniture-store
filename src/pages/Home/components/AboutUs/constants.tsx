import { ICard } from "../../../../components/Card";
import { nosotros } from "../../../../assets";

import styles from './AboutUs.module.scss'

export const categoryProducts: ICard[] = [
  {
    image: { src: nosotros ,classNameImg: styles.ImgCard},
    description: (
      <div className={styles.description}>
        <h2>Sobre Nosostros</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          assumenda blanditiis quia natus et mollitia exercitationem iusto,
          eveniet voluptas, a ex impedit aliquid beatae itaque harum. Quam
          dignissimos quae quidem?
        </p>
      </div>
    ),
  },
];
