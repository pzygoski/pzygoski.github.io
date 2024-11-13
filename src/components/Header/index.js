import Link from "next/link"
import styles from './Header.module.css'

export default function Header(){
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.lista}>
                    <li>
                        <Link href="/">Teclado Musical(Início)</Link>
                        </li>
                    <li>
                        <Link href="/sobre">Tipos de Teclados</Link>
                    </li>
                    <li>
                        <Link href="/">Componentes e Funcionalidades</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}