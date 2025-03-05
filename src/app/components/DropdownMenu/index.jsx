import Image from "next/image"
import dropdownMenuStyles from "../DropdownMenu/dropdownMenu.module.scss"

export default function DropdownMenu() {
    return (
        <div className={dropdownMenuStyles.dropdownMenu}>
            <button className={dropdownMenuStyles.menuItem} >
                <Image
                src="/Vector.svg"
                alt="logo"
                width={26}
                height={24}
                />
                <p>Dossiê Jurídico</p>
            </button>
            <button className={dropdownMenuStyles.menuItem}>
                <Image
                src="/Vector (1).svg"
                alt="logo"
                width={26}
                height={24}
                />
                <p>Monitoramento de Processos</p>
            </button>
            <button className={dropdownMenuStyles.menuItem}>
                <Image
                src="/Vector (2).svg"
                alt="logo"
                width={26}
                height={24}
                />
                <p>Buscador de Processos</p>
            </button>
            <hr className={dropdownMenuStyles.line}/>
            <button className={`${dropdownMenuStyles.menuItem} ${dropdownMenuStyles.menuButtonSmaller}`}>
                <Image
                src="/Vector (3).svg"
                alt="logo"
                width={26}
                height={24}
                />
                <p>Gestão do Plano</p>
            </button>
            <button className={`${dropdownMenuStyles.menuItem} ${dropdownMenuStyles.menuButtonSmaller}`} disabled>
                <Image
                src="/Vector (5).svg"
                alt="logo"
                width={26}
                height={24}
                />
                <p>Gestão de Acessos</p>
            </button>
            <button className={`${dropdownMenuStyles.menuItem} ${dropdownMenuStyles.menuButtonSmaller}`}>
                <Image
                src="/Vector (4).svg"
                alt="logo"
                width={26}
                height={24}
                />
                <p>Histórico de Buscas</p>
            </button>
        </div>
    )
}