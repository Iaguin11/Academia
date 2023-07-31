/* eslint-disable react/prop-types */
import ContentHero from "../ContentHero"
import Header from "../Header"
import styles from "../HomePage/HomePage.module.css"


export default function HomePage(){
  return (
    <>
   <section className={styles.container}>
    <Header></Header>
    <ContentHero/>
   </section>
    </>
    
    
  )
}