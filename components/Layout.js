import AppNavBar from "./AppNavBar";
import Head from "next/head";
import styles from "./Layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Layout = (props) => {
  return (
    <div className="position-relative">
      <Head>
        <title>The Breaking Bad Universe</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
        <meta
          name="description"
          content="A Breaking Bad information site. Find out more information such as current status and kill counts about the characters here within simple clicks!"
        />
        <meta
          name="title"
          property="og:title"
          content="A Breaking Bad Fandom"
        />
        <meta property="og:type" content="Website" />
        <meta
          name="image"
          property="og:image"
          content="https://res.cloudinary.com/rainforss/image/upload/v1602019474/breakingbad_vyznac.png"
        />
        <meta
          name="description"
          property="og:description"
          content="A Breaking Bad information site. Find out more information such as current status and kill counts about the characters here within simple clicks!"
        />
        <meta name="author" content="Jake Chen" />
      </Head>
      <div className={styles.contacts}>
        <a
          href="https://www.linkedin.com/in/jake-chen-210818128/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.externalLink}
        >
          <FontAwesomeIcon style={{ height: "100%" }} icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/rainforss/Breaking-Bad-Fandom"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.externalLink}
        >
          <FontAwesomeIcon style={{ height: "100%" }} icon={faGithubSquare} />
        </a>
      </div>

      <AppNavBar />
      {props.children}
    </div>
  );
};

export default Layout;
