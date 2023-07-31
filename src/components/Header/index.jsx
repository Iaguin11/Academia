import styles from "../Header/Header.module.css"
import logo from "../../assets/logo.png"

export default function Header(){
 return(
  <div className={styles.header}>
    <div className={styles.img}>
    <img src={logo} alt="" />
    </div>
    <nav className={styles.nav}>
      <a href="#">SOBRE</a>
      <a href="#">SERVIÇOS</a>
      <a href="#">PREÇOS</a>
      <a href="#">EQUIPAMENTOS</a>
      <a className={styles.btnNavaBar} href="#">REGISTRE-SE</a>
    </nav>
</div>
 )
}