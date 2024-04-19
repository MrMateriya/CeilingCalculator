import React from 'react';
import styles from './styles/MinusButton.module.css'
const MinusButton = React.memo(function MinusButton({fill= 'black', className, ...props}) {
  return (
    <button className={[styles['minus-button'], className].join(" ")} {...props}>
      <svg className={styles['minus-button__svg']} width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.5 1.5C0.5 0.947715 0.947715 0.5 1.5 0.5H14.5C15.0523 0.5 15.5 0.947715 15.5 1.5V2.5C15.5 3.05228 15.0523 3.5 14.5 3.5H1.5C0.947715 3.5 0.5 3.05228 0.5 2.5V1.5Z"
          fill={fill}/>
      </svg>
    </button>
  );
});

export default MinusButton;