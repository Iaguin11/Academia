import styles from "../ThirdContent/styles.module.css"
import img1 from "../../../assets/Rectangle 13.png"
import img2 from "../../../assets/Rectangle 14.png"
import img3 from "../../../assets/Rectangle 15.png"

export default function ThirdContent(){
  return(
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>NOSSOS PLANOS</h1>
      </div>
      <div className={styles.content}>
          <div className={styles.contentOne}>
            <img src={img1} alt="" />
              <h2 className={styles.text}>PASSE DE 1 DIA</h2>
              <div className={styles.divFinaly}>
                <p className={styles.paragraphOne}>Teste gratuitamente</p>
                <button className={styles.btn}>SELECIONAR</button>
              </div>
          </div>
          
          <div className={styles.contentOne}>
            <p className={styles.textTop}>RECOMENDADO POR USUÁRIOS</p>
            <img src={img2} alt="" />
            <h2 className={styles.h2}>PASSE DE 1 MÊS</h2>
            <div className={styles.divFinaly}>
              <p className={styles.paragraph2}>À partir de <span className={styles.span}>R$99,00</span></p>
              <button className={styles.btnRed}>SELECIONAR</button>
            </div>
          </div>

          <div className={styles.contentOne}>
            <img src={img3} alt="" />
            <h2 className={styles.text}>PASSE DE 1 ANO</h2>
            <div className={styles.divFinaly}>
              <p className={styles.paragraph}>À partir de <span className={styles.span}>R$999,00</span></p>
              <button className={styles.btn}>SELECIONAR</button>
            </div>
          </div>
        </div>
      </div>

  )
}