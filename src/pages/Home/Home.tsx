import { Footer } from "../../components";
import { Menu } from "../../components/NavBar/Menu";
import AboutUS from "./components/AboutUs";
import Category from "./components/Category";
import Products from "./components/Products";
import { footerSections, menuItems } from "./constants";

import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          Tienda de <span className="blue">muebles</span>{" "}
        </h1>
      </header>
      <Menu items={menuItems} className={styles.borderNav} />
      <main className={styles.sections}>
      <div className={styles.hero}></div>
      <Category />
      <AboutUS />
      <Products/>
      <Footer section={footerSections} />
      </main>
    </div>
  );
};

export default Home;
