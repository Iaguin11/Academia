import imgRec16 from "../../../assets/Rectangle 16.png"
import imgRec17 from "../../../assets/Rectangle 17.png"
import imgRec18 from "../../../assets/Rectangle 18.png"
import png from "../../../assets/pngwing 2.png"
import styles from "../ContentFour/styles.module.css"
export default function ContentFour(){
  return(
    <div className={styles.container}>
      <div className={styles.contentImgs}>
        <img className={styles.imgOne} src={imgRec16} alt="" />
        <img className={styles.imgTwo} src={imgRec17} alt="" />
        <img className={styles.imgThree} src={imgRec18} alt="" />
      </div>
      <div className={styles.contentImgs} >
        <img className={styles.png} src={png} alt="" />
      </div>
      <div className={styles.subContent}>
        <div className={styles.subTitles}>
          <h5>FAÇA PARTE <span>DA FAMÍLIA</span></h5>
          <p>Nossa academia tem milhares de clientes satisfeitos com resultados surpreendentes. Junte-se a nós e comece a transformar seu corpo agora!</p>
        </div>
        <div className={styles.description}>
          <div className={styles.divs}>
            <h5>+15</h5>
            <p>Unidade na cidade de São Paulo</p>
          </div>
          <div>
            <h5>+200</h5>
            <p>Alunos matriculados em nossas unidade</p>
          </div>
          <div>
            <h5>+100</h5>
            <p>Professor altamente qualificados</p>
          </div>
        </div>
      </div>
    </div>
  )
}