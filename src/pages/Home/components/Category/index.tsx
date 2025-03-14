import Card from "../../../../components/Card/Card";
import styles from "./Category.module.scss";
import { categoryProducts } from "./constants";

export const Category = () => {
  return (
    <div className={styles.container}>
      <h2>Categorías de Productos</h2>
      <div className={styles.categoryContainer}>
        {categoryProducts.map((product, index) => (
          <Card
            key={index}
            image={product.image}
            description={product.description}
            className="column"
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
