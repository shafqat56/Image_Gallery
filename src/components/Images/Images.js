import React from 'react'
import ImageCard from './imageCard';
import styles from './images.module.css'


const Images = ({images}) => {
  return (
    <div className={styles.container}>
   {images.map((element)=>{
    return <ImageCard  images={element}/>
   })}
    </div>
  )
}

export default Images