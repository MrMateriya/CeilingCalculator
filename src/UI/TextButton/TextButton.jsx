import React from 'react';
import styles from './styles/TextButton.module.css'
import QuestionMark from "../QuestionMark/QuestionMark";

const TextButton = React.memo(function TextButton({className, children, type= 'outlined', descriptionText, ...props}) {
  let typeStyleButton;
  switch (type) {
    case 'outlined':
      typeStyleButton = styles.button_outline
      break;
    case 'filled':
      typeStyleButton = styles.button_filled
      break;
    default:
      typeStyleButton = styles.button_filled
      break;
  }
  const rootClasses = [
    styles.button,
    typeStyleButton,
  ]
  if (descriptionText) rootClasses.push(styles['button_question-mark-padding'])
  if (className) rootClasses.push(className)
  return (
    <button className={rootClasses.join(' ')} {...props}>
      {descriptionText
        ? <QuestionMark descriptionText={descriptionText}/>
        : false}
      {children}
    </button>
  );
});

export default TextButton;