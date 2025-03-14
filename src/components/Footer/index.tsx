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
      <div className={styles.content}>
        {section.map((section, index) => (
          <div key={index} className={`${styles.section} ${className}`}>
            <h3>{section.title}</h3>
            <nav className={`${styles.nav}`}>
              {section.links?.map((link, linkIndex) => (
                <a key={linkIndex} href={link.link}>
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>
      <p>{description}</p>
    </footer>
  );
};

export default Footer;
