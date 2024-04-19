import React, {useState} from 'react';
import styles from './styles/QuestionMark.module.css'

const QuestionMark = function QuestionMark({className, descriptionText, ...props}) {
  const [isShowDescription, setIsShowDescription] = useState(false)

  return (
    <div
      className={[styles['question-mark'], className].join(' ')}
      {...props}
      onClick={e => setIsShowDescription(prevState => !prevState)}
      // onMouseEnter={e => setIsShowDescription(prev => !prev)}
      // onMouseLeave={e => setIsShowDescription(prev => !prev)}
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