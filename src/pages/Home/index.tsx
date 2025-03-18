import AboutUS from "./components/AboutUs";
import Category from "./components/Category";
import Products from "./components/Products";

import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.sections}>
      <div className={styles.hero}></div>
      <Category />
      <AboutUS />
      <Products/>
      </main>
    </div>
  );
};

export default Home;
