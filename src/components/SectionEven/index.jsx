/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import styles from "../SectionEven/styles.module.css"
// import img from "../../assets/icons8-barbell-64 1.png"
import React, { useState, useEffect } from 'react';

const sectionEven = () => {
  const [posicao, setPosicao] = useState(0);
  const leitreiroRef = React.useRef(null)

  useEffect(function () {
    const handleResize = () => {
      const leitreiroWidth = leitreiroRef.current.offsetWidth
      setPosicao(leitreiroWidth)
    }
    handleResize()

    window.addEventListener('resize', handleResize)
    
    const intervalo = setInterval(() => {
      setPosicao(pos =>{
        const leitreiroWidth = leitreiroRef.current.offsetWidth
        if(pos <= -leitreiroWidth){
          return leitreiroWidth;
        }
        return pos - 1
      })
    }, 5);

    return () => {
      clearInterval(intervalo);
      window.removeEventListener('resize', handleResize);
  }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.text} ref={leitreiroRef}>
        <p style={{ transform: `translateX(${posicao}px)` }}>
          consultoria individual 
        </p>
        <p style={{ transform: `translateX(${posicao}px)` }}>
          +20 professores
        </p>
        <p style={{ transform: `translateX(${posicao}px)` }}>
          treine da sua forma
        </p>
        <p style={{ transform: `translateX(${posicao}px)` }}>
          +15 unidades
        </p>
        <p style={{ transform: `translateX(${posicao}px)` }}>
          montamos seu treino
        </p>
      </div>
    </div>
  )
}
export default sectionEven

