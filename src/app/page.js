import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image className={styles.img} src='/images/imagem-1-teclado.jpg' alt='Imagem Teclado' width={600} height={400} />
    </div>
  );
}