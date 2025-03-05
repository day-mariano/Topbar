"use client";
import Image from "next/image";
import Link from "next/link";
import headersStyles from "../headers.module.scss"
import header3Styles from "./header3.module.scss"
import { useState } from "react";
import DropdownMenu from "../../DropdownMenu"
import DropdownUser from "../../DropdownUser"

export default function Modulo1() {
  const [nameModulo, setNameModulo] = useState("Dossiê Juridico")
  const [nameUsuario, setNameUsuario] = useState("Carla Souza")
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isOpenUser, setIsOpenUser] = useState(false)

  return (
    <>
      <header className={headersStyles.header}>
        <div className={headersStyles.headerRight}>
          <button className={headersStyles.buttonMenu} onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <Image
                src="/Menu.svg"
                alt="menu"
                width={26}
                height={24}
                />
                {isOpenMenu && (
                  <div>
                    <DropdownMenu/>
                  </div>
                )}
          </button>
          <div className={header3Styles.divModulo}>
            <Image
                src="/Vector.svg"
                alt="Vector"
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
        <nav className={headersStyles.nav}>
          <button className={headersStyles.buttonBell}>
            <Image
              src="/icon.svg"
              alt="icon"
              width={24}
              height={24}
              />
          </button>
          <button className={headersStyles.buttonUsuario} onClick={() => setIsOpenUser(!isOpenUser)}>
            <Image
              src="/photo.svg"
              alt="photo"
              width={48}
              height={48}
              />
            <p>{nameUsuario}</p>
            <Image
            src="/expand_more_FILL0_wght400_GRAD0_opsz48 1.svg"
            alt="expand"
            width={16}
            height={16}
            />
            {isOpenUser && (
              <div>
                <DropdownUser/>
              </div>
            )}
          </button>
        </nav>
        <button className={headersStyles.buttonHug}>
        <Image
            src="/Frame 4666.svg"
            alt="buttonHug"
            width={16}
            height={16}
            />
        </button>
      </header>
    </>
  );
}