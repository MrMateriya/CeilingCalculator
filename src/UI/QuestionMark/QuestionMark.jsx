import React, {useEffect, useRef, useState} from 'react';
import styles from './styles/QuestionMark.module.css'
import {handleTabSelection} from "../../utils/handleTabSelection";

const QuestionMark = function QuestionMark({className, descriptionText, ...props}) {
    const [isShowDescription, setIsShowDescription] = useState(false)
    const button = useRef(null)

    useEffect(() => {
        function clickOutHandle(e) {
            const click = e.composedPath().includes(button.current)
            if (!click) setIsShowDescription(false);
        }
        document.addEventListener('click', clickOutHandle)

        return () => {
            document.removeEventListener('click', clickOutHandle)
        }
    }, [])

    function handleKeyDown(e) {
        handleTabSelection(e, () => {
            e.preventDefault()
            setIsShowDescription(prev => !prev);
        })
    }

    return (
        <div
            className={[styles['question-mark'], className].join(' ')}
            {...props}
            tabIndex={0}
            onClick={() => setIsShowDescription(prevState => !prevState)}
            onKeyDown={handleKeyDown}
            ref={button}
            onBlur={() => setIsShowDescription(false)}
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