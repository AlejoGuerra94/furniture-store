import { ICard } from "../../../../components/Card";
import { producto1, producto2, producto3, producto4, producto5, producto6 } from "../../../../assets";
import { Button } from "../../../../components";

import styles from "./Products.module.scss";

const buttonCardAdd = <Button children="Agregar al carrito" variant="secondary" />;

export const products: ICard[] = [
  {
    image: { src: producto1, classNameImg: "imgCard" },
    title: "Producto 1",
    description: (
      <div className={styles.cardDescription}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
          commodi ullam? Consequatur repudiandae placeat et? Delectus inventore,
          numquam omnis quia cumque dolorum tempora sint, libero, dignissimos in
          odit. Ipsa, consequatur!
        </p>
        <p className={styles.priceProduct}> $ 1,000.000</p>
        {buttonCardAdd}
      </div>
    ),
  },
  {
    image: { src: producto2, classNameImg: "imgCard" },
    title: "Producto 2",
    description: (
      <div className={styles.cardDescription}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
          commodi ullam? Consequatur repudiandae placeat et? Delectus inventore,
          numquam omnis quia cumque dolorum tempora sint, libero, dignissimos in
          odit. Ipsa, consequatur!
        </p>
        <p className={styles.priceProduct}> $ 1,000.000</p>
        {buttonCardAdd}
      </div>
    ),
  },
  {
    image: { src: producto3, classNameImg: "imgCard" },
    title: "Producto 3",
    description: (
      <div className={styles.cardDescription}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
          commodi ullam? Consequatur repudiandae placeat et? Delectus inventore,
          numquam omnis quia cumque dolorum tempora sint, libero, dignissimos in
          odit. Ipsa, consequatur!
        </p>
        <p className={styles.priceProduct}> $ 1,000.000</p>
        {buttonCardAdd}
      </div>
    ),
  },
  {
    image: { src: producto4, classNameImg: "imgCard" },
    title: "Producto 4",
    description: (
      <div className={styles.cardDescription}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
          commodi ullam? Consequatur repudiandae placeat et? Delectus inventore,
          numquam omnis quia cumque dolorum tempora sint, libero, dignissimos in
          odit. Ipsa, consequatur!
        </p>
        <p className={styles.priceProduct}> $ 1,000.000</p>
        {buttonCardAdd}
      </div>
    ),
  },
  {
    image: { src: producto5, classNameImg: "imgCard" },
    title: "Producto 5",
    description: (
      <div className={styles.cardDescription}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
        commodi ullam? Consequatur repudiandae placeat et? Delectus inventore,
        numquam omnis quia cumque dolorum tempora sint, libero, dignissimos in
        odit. Ipsa, consequatur!
      </p>
      <p className={styles.priceProduct}> $ 1,000.000</p>
      {buttonCardAdd}
    </div>
    ),
  },
  {
    image: { src: producto6, classNameImg: "imgCard" },
    title: "Producto 6",
    description: (
      <div className={styles.cardDescription}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
        commodi ullam? Consequatur repudiandae placeat et? Delectus inventore,
        numquam omnis quia cumque dolorum tempora sint, libero, dignissimos in
        odit. Ipsa, consequatur!
      </p>
      <p className={styles.priceProduct}> $ 1,000.000</p>
      {buttonCardAdd}
    </div>
    ),
  },
];
