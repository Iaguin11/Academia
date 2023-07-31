import Card from "../Card"
import styles from "../ContentTheSection/style.module.css"
import imgSports from "../../../assets/sport 1.png"
import imgDumbbel from "../../../assets/dumbbell 1.png"
import imgTrainer from "../../../assets/trainer 1.png"
import imgGym from "../../../assets/gym 1.png"

export default function ContentSection(){
  return(
    <div className={styles.container}>
      <div className={styles.subContent}>
        <h1 className={styles.title}>NOSSOS<span className={styles.span}>DIFERENCIAS</span></h1>
      </div>
      <div className={styles.content}>
        <div className={styles.divCard}>
          <Card
           img={imgSports} title="EQUIPE QUALIFICADA" description="Profissionais altamente capacitados e motivados a ajudá-lo a alcançar seus objetivos."
           button="conheça nossos profissionais"
           />
        </div>
        <div className={styles.divCard}>
          <Card
          img={imgDumbbel} title="AMBIENTE MOTIVADOR" description="Um ambiente seguro e inspirador para ajudá-lo a manter-se motivado durante seus treinos."
          button="Faça um tour virtual"
          />
        </div>
        <div className={styles.divCard}>
          <Card className={styles.card}
          img={imgTrainer} title="AULAS DIVERSAS" description="Oferecemos uma ampla variedade de aulas, desde musculação até dança, para atender a todos os interesses."
          button="Ver modalidades"
          />
        </div>
        <div className={styles.divCard}>
        <Card
          img={imgGym} title="Equipamentos Modernos" description="Mantemos nossos equipamentos atualizados para garantir a segurança e eficiência de nossos clientes."
          button="faça um tour virtual"
          />
        </div>
      </div>
    </div>
  )
}