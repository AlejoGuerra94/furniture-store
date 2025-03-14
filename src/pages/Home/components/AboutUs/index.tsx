import Card from "../../../../components/Card/Card";
import { categoryProducts } from "./constants";

import styles from './AboutUs.module.scss'

export const AboutUS = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutUsContainer}>
        {categoryProducts.map((product, index) => (
          <Card
            key={index}
            image={product.image}
            description={product.description}
            className={`row ${styles.aboutCard}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUS;
