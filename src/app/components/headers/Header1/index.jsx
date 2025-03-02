import Image from "next/image";
import Link from "next/link";
import styles from "../../../page.module.scss";
import headersStyles from "../headers.module.scss"

export default function Modulo1() {
  return (
    <>
      <header className={styles.header}>
        <div>
          <Image
              src="/Menu.png"
              alt="logo"
              width={26}
              height={24}
              />
            <p className={headersStyles.titleBold16}>
              Header
            </p>

        </div>
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
            href="/"
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