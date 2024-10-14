import React, {useState} from 'react';
import styles from './styles/QuestionMark.module.css'
import {handleTabSelection} from "../../utils/handleTabSelection";

const QuestionMark = function QuestionMark({className, descriptionText, ...props}) {
    const [isShowDescription, setIsShowDescription] = useState(false)

    function handleKeyDown(e) {
        handleTabSelection(e, () => {
            e.preventDefault()
            setIsShowDescription(prev => !prev);
        })
    }
    function handleDialogMouseLeave() {
        setIsShowDescription(false);
    }
    function handlePointerMove() {
        setIsShowDescription(true)
    }

    return (
        <div
            className={[styles['question-mark'], className].join(' ')}
            {...props}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onPointerMove={handlePointerMove}
            onPointerLeave={handleDialogMouseLeave}
        >
            ?
            {
                isShowDescription && Boolean(descriptionText) ? <div className={styles['question-mark__content']}>
                    {descriptionText}
                </div> : null
            }
        </div>
    );
};

export default QuestionMark;