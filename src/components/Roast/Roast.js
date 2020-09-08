import React from 'react';
import styles from './Roast.module.css';
import api from '../../api';

const Roast = props => {
  return (
    <div className={styles.roast}>
      <img src={`${api.uploads}/${props.image}`} className='rounded' />
    </div>
  );
};

export default Roast;