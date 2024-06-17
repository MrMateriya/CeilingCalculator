import React, { useMemo, useState} from 'react';
import './styles/SelectorInput.module.css'
import styles from './styles/SelectorInput.module.css'
import SelectorButton from "../../UI/SelectorButton/SelectorButton";
import {handleTabSelection} from "../../utils/handleTabSelection";
const SelectorInput = React.memo(function SelectorInput({className, options, onChange, inputValue, ...props}) {
  // option template object
  // {id: 1, value: 'matte', text: 'Матовая'}

  const [choseOption, setChoseOption] = useState(() => {
    if (inputValue !== undefined) {
      return inputValue
    }
    if (options) {
      return options[0]
    }
    return {id: 1, value: 'matte', text: 'Матовая'}
  })
  const [isShowOptions, setIsShowOptions] = useState(false)
  const optionsElements = useMemo(() => {
    return options.map((mapOption) => {
      if (mapOption.id === choseOption.id) {
        return (
          <div
            key={mapOption.id}
            tabIndex={0}
            onKeyDown={(e) => {handleTabSelection(e, optionChoosing, mapOption, e)}}
            onClick={e => optionChoosing(mapOption, e)}
            className={[styles['selector-input__option'], styles['selector-input__option_selected']].join(' ')}>
            {mapOption.text}
          </div>
        );
      }
      return (
        <div
          key={mapOption.id}
          tabIndex={0}
          onKeyDown={(e) => {handleTabSelection(e, optionChoosing, mapOption, e)}}
          onClick={e => optionChoosing(mapOption, e)}
          className={styles['selector-input__option']}>
          {mapOption.text}
        </div>
      );
    })
  }, [options, choseOption]);
  function showOptions(e) {
    setIsShowOptions(showed => !showed)
  }
  function optionChoosing(option, e) {
    e.stopPropagation()
    if (onChange && choseOption.id !== option.id) {
      onChange(option)
    }
    setChoseOption((prevOption) => {
      if (prevOption === option) {
        return prevOption
      }
      return option
    })
    setIsShowOptions((prevState) => {
      if (choseOption === option) {
        return prevState
      }
      return !prevState
    })
  }
  return (
    <div
      className={[styles['selector-input'], className].join(' ')}
      onClick={showOptions}
      onMouseLeave={e => {if(isShowOptions) {showOptions(e)}}}
      {...props}>
      <p className={styles['selector-input__initial-option']}>{choseOption.text}</p>
      <SelectorButton style={isShowOptions? {backgroundColor: 'rgb(167 44 89)'} : {}}/>
      {isShowOptions
        ? <div className={styles['selector-input__options-content']}>
          {optionsElements}
        </div>
        : false}
    </div>
  );
});

export default SelectorInput;