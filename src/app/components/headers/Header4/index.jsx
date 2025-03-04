"use client";
import Image from "next/image";
import Link from "next/link";
import headersStyles from "../headers.module.scss"
import header4Styles from "./header4.module.scss"
import { useState } from "react";

export default function Modulo1() {
  const [nameModulo, setNameModulo] = useState("Dossiê Juridico")
  const [nameUsuario, setNameUsuario] = useState("Carla Souza")

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