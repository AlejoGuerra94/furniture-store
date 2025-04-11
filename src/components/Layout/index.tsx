import { Outlet } from "react-router-dom";
import { Menu } from "../NavBar/Menu";
import Footer from "../Footer";

import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
      <h1 className={styles.title}>
        Tienda <span className="blue"> muebles</span>
      </h1>
      <Menu />
      </header>
      <main className={styles.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
