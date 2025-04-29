import { useEffect, useState } from "react";
import styles from "./store.module.scss";
import { IProduct } from "../../types/products";
import { productsService } from "../../service/products";
import { Card } from "../../components";
const Store = () => {
  const [product, setProduct] = useState<IProduct[]>([]);

  useEffect(() => {
    const products = async () => {
      try {
        const data = await productsService.getProducts();
        setProduct(data);
      } catch (error) {
        console.log("error al cargar los productos", error);
        throw error;
      }
    };
    products();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Encuentra excelentes productos</h2>
      <div className={styles.products}>
        {product.map((product) => (
          <div key={product.id} className={styles.products__product}>
            <Card
              image={{ src: product.images[1] }}
              title={product.title}
              description={<p>{product.price}</p>}
            className={styles.productStore}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
