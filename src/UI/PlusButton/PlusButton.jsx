import React from 'react';
import styles from './styles/PlusButton.module.css'
const PlusButton = React.memo(function PlusButton({fill= 'black', className, ...props}) {
  return (
    <button className={[styles['plus-button'], className].join(" ")} {...props}>
      <svg className={styles['plus-button__svg']} width='16' height='16' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 8C16 8.73733 15.936 9.33333 15.1987 9.33333H9.33333V15.1987C9.33333 15.9347 8.73733 16 8 16C7.26267 16 6.66667 15.9347 6.66667 15.1987V9.33333H0.801333C0.0653331 9.33333 0 8.73733 0 8C0 7.26267 0.0653331 6.66667 0.801333 6.66667H6.66667V0.801333C6.66667 0.0639998 7.26267 0 8 0C8.73733 0 9.33333 0.0639998 9.33333 0.801333V6.66667H15.1987C15.936 6.66667 16 7.26267 16 8Z"
          fill={fill}/>
      </svg>
    </button>
  );
});

export default PlusButton;