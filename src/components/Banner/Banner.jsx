import React from 'react';
import styles from './Banner.module.css';

export const Banner = ({ title, text, name }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_content}>
        <h1 className={styles.banner_title}>{title}</h1>
        <p>{text}</p>
        <a href="/sale" className={styles.banner_button}>{name}</a>
      </div>
    </div>
  );
};
