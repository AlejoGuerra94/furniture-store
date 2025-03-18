import { Card } from "../../../../components";
import { products } from "./constanst";
import styles from "./Products.module.scss";

const Products = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.titleProduct}>Nuestros Productos</h2>
      <div className={`${styles.productsContainer}`}>
        {products.map((product, index) => (
          <Card
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            className={`column ${styles.cardProduct}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
