import { nosotros } from "../../assets";
import styles from "./AboutUs.module.scss";

export const AboutUs = () => {
  return (
    <main className={styles.container}>
      <h2>Sobre Nosotros</h2>
      <div className={styles.content}>
        <img className={styles.imgAbout} src={nosotros} alt="" />
        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum
            perspiciatis ea libero reiciendis soluta pariatur voluptatibus optio
            dolore quod dolorem corrupti incidunt eos, consectetur aliquam
            facilis natus, inventore deserunt!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            accusantium voluptatum libero maiores accusamus voluptatem saepe
            aperiam, explicabo, sed eveniet distinctio nobis culpa omnis
            asperiores quam assumenda non fugiat dolorum.
          </p>
        </div>
      </div>
    </main>
  );
};
export default AboutUs;
