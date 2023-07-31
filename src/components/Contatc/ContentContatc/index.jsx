import styles from "../ContentContatc/styles.module.css"
import img from "../../../assets/pngwing 3.png"

export default function ContentContatc(){
  return(
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>ENTRE EM CONTATO</h1>
        <p className={styles.paragraph}>Matricule-se agora mesmo! Fale com um de nossos atendentes</p>
        <div className={styles.divInput}>
          <input type="text" placeholder="NOME" />
          <input type="text" placeholder="TELEFONE" />
        </div>
        <div>
          <button className={styles.CroppeBtn}>SOLICITAR CONTATO</button>
        </div>
      </div>
      <div className={styles.divImg}>
        <img className={styles.img} src={img} alt="" />
      </div>
    </div>
  )
}