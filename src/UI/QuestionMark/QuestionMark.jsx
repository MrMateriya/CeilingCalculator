import React, {useState} from 'react';
import styles from './styles/QuestionMark.module.css'
import {handleTabSelection} from "../../utils/handleTabSelection";

const QuestionMark = function QuestionMark({className, descriptionText, ...props}) {
  const [isShowDescription, setIsShowDescription] = useState(false)

  function handleShowDescription(e) {
    setIsShowDescription(prevState => !prevState)
  }

  return (
    <div
      className={[styles['question-mark'], className].join(' ')}
      {...props}
      tabIndex={0}
      onKeyDown={(e) => {
        handleTabSelection(e, handleShowDescription)
      }}
      onClick={handleShowDescription}
    >
      ?
      {isShowDescription
        ? descriptionText
          ? <div onMouseLeave={(e) => {e.preventDefault(); setIsShowDescription(false);}} className={styles['question-mark__content']}>
            {descriptionText}
            </div>
          : false
        : false}
    </div>
  );
};

export default QuestionMark;