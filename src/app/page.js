import styles from "./page.module.scss";
import globalStyles from "./globals.scss"
import Header1 from "./components/headers/Header1";
import Header2 from "./components/headers/Header2";
import Header3 from "./components/headers/Header3";
import Header4 from "./components/headers/Header4";

export default function Home() {
  return (
    <div className={`${styles.page} ${globalStyles.body}`}>
      {/* <Header1/> */}
      {/* <Header2/> */}
      <Header3/>
      {/* <Header4/> */}
    </div>
  );
}
