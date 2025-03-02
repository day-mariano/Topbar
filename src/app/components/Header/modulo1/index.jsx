import Image from "next/image";
import Link from "next/link";
import styles from "../../../page.module.scss";

export default function Modulo1() {
  return (
    <>
      <header className={styles.header}>
        Header
        <Link
          href="/" 
          target="_self"
        >
            <Image
            src="/Logo.png"
            alt="logo"
            width={204}
            height={40}
            />
        </Link>
        <nav className={styles.nav}>
          <Link
            href="https://pokemontcg.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Usuário
          </Link>
        </nav>
      </header>
    </>
  );
}