/* eslint-disable react/prop-types */
import arrow from "../../../assets/Arrow.png"
import styles from "../Card/styles.module.css"
export default function Card({img,title,description,button}){
  return(
    <>
      <img src={img} alt="logo" />
      <h5 className={styles.text}>{title}</h5>
      <p className={styles.description}>{description}</p>
      <button className={styles.btn}>{button}<img src={arrow}/></button>
    </>
  )
}