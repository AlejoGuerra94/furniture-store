import styles from "./Footer.module.scss";

interface ILink {
  title: string;
  link: string;
  className?: string;
}

export interface IFooterSection {
  title: string;
  links?: ILink[];
  className?: string;
}

interface IFooter {
  section: IFooterSection[];
  description?: string;
  className?: string;
}

 const Footer = ({ section, description, className }: IFooter) => {
  return (
    <footer className={styles.container}>
      {section.map((section, index) => (
        <div key={index} className={`${styles.section} ${className}`}>
          <h3>{section.title}</h3>
          <nav className={`${styles.nav}`}>
            <ul className={styles.list}>
              {section.links?.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ))}
      <p>{description}</p>
    </footer>
  );
};

export default Footer;