import React from 'react'
import styles from './App.module.css';

export const Card = ({name, favoriteSport}) => {
 
    return (
    <div className={styles.cardContainer}>

      <h2 className={styles.cardTitle}>Tu respuesta</h2>
      <p className={styles.cardContent}>Hola {name}!</p>
      <p className={styles.cardContent}>Tu deporte favorito es {favoriteSport}</p>


    </div>
  )
}
