import Image from "next/image"
import dropdownUserStyles from "../DropdownUser/dropdownUser.module.scss"

export default function DropdownUser() {
    return (
        <div className={dropdownUserStyles.dropdownMenu}>
            <button className={`${dropdownUserStyles.menuItem} ${dropdownUserStyles.menuButtonSmaller}`}>
                <Image
                src="/Vector (6).svg"
                alt="logo"
                width={26}
                height={24}
                />
                <p>Minha Conta</p>
            </button>
            <button className={`${dropdownUserStyles.menuItem} ${dropdownUserStyles.menuButtonSmaller}`}>
                <Image
                src="/Vector (7).svg"
                alt="logo"
                width={26}
                height={24}
                />
                <p>Sair</p>
            </button>
        </div>
    )
}