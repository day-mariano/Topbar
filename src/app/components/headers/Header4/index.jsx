"use client";
import Image from "next/image";
import Link from "next/link";
import headersStyles from "../headers.module.scss"
import header4Styles from "./header4.module.scss"

export default function Modulo1() {
  
  return (
    <>
      <header className={`${headersStyles.header} ${header4Styles.header}`}>
        <Link
          href="/" 
          target="home"
        >
            <Image
            src="/Logo.svg"
            alt="logo"
            width={204}
            height={40}
            />
        </Link>
      </header>
    </>
  );
}