import styles from "./page.module.scss";
import globalStyles from "./globals.scss"
import Modulo1 from "./components/headers/Header1";

export default function Home() {
  return (
    <div className={`${styles.page} ${globalStyles.body}`}>
      <Modulo1/>
    </div>
  );
}
