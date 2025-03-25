import { Outlet } from "react-router-dom";
import { Menu } from "../NavBar/Menu";
import Footer from "../Footer";
import Header from "../Header";

import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Menu />
      <main className={styles.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
