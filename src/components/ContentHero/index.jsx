
import arrow from "../../assets/Arrow.png"
import styles from "../ContentHero/styles.module.css";
import man from "../../assets/img-hero.png"


export default function ContentHero(){
  return(
    <div className={styles.container}>
      <div className={styles.divSecundary}>
        <h1 className={styles.title}>AQUI NÃO SE</h1>
        <h5 className={styles.subTitle}>TREINA FOFO</h5>
        <p className={styles.text}>Transforme-se na nossa academia! Oferecemos equipamentos modernos, 
        instrutores qualificados e aulas para todos os níveis. Alcance seus objetivos fitness conosco. Experimente hoje!</p>
        <button className={styles.btn}>COMEÇAR <img src={arrow}/></button>
      </div>
      <div className={styles.contentImgMan}>
       <img className={styles.imgMan} src={man} alt="" />
      </div>
    </div>
    
  )
}