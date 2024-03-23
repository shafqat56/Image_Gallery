import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './images.module.css';

const imageCard = ({images}) => {
  return (
    <div className={styles.card}>
      <img
        src={images.url}
        alt="imageCard"
      />
      <h1>{images.name}</h1>
      <p>
        {images.desc}
      
      </p>
      <div>
        <p>
        <FontAwesomeIcon icon={faUser} style={{ color: 'blue' }} />
          <span>{images.author}</span>
        </p>
        <p>
        <FontAwesomeIcon icon={faCalendarAlt} style={{ color: 'blue' }} />
          <span>{images.date}</span>
        </p>
      </div>
    </div>
  );
};

export default imageCard;
