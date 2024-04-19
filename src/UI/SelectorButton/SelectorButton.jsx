import React from 'react';
import styles from './styles/SelectorButton.module.css'
const SelectorButton = React.memo(function SelectorButton({fill= 'white', className, ...props}) {
  return (
    <button className={[styles['selector-button'], className].join(' ')} {...props}>
      <svg className={styles['selector-button__svg']} width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 8.04168L0.25 1.79168L1.70833 0.333344L6.5 5.12501L11.2917 0.333344L12.75 1.79168L6.5 8.04168Z"
              fill={fill}/>
      </svg>
    </button>
  );
});

export default SelectorButton;