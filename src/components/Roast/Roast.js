import React from 'react';
import styles from './Roast.module.css';
import api from '../../api';

const Roast = props => {
  return (
    <div className={styles.roast}>
      <div className={styles.imageHolder}>
        <img src={`${api.uploads}/${props.image}`} alt={props.caption} loading="lazy" />
        <div className={styles.imageOverlay}>
          <div className={styles.imageCaption}>{props.caption}</div>
        </div>
      </div>
    </div>
  );
};

export default Roast;