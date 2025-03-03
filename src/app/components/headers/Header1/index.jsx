"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../page.module.scss";
import headersStyles from "../headers.module.scss"
import { useState } from "react";

export default function Modulo1() {
  const [nameModulo, setNameModulo] = useState("Dossiê Juridico")

  return (
    <>
      <header className={headersStyles.header}>
        <div className={headersStyles.headerRight}>
          <button className={headersStyles.buttonMenu}>
            <Image
                src="/Menu.svg"
                alt="logo"
                width={26}
                height={24}
                />
          </button>
          <div className={headersStyles.divModulo}>
            <Image
                src="/Vector.svg"
                alt="logo"
                width={26}
                height={24}
                />
            <p className={headersStyles.titleBold16}>
              {nameModulo}
            </p>
          </div>
        </div>
        <Link
          href="/" 
          target="_self"
        >
            <Image
            src="/Logo.svg"
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