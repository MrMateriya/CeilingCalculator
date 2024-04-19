import React, {useCallback, useState} from 'react';
import styles from './styles/CountedInput.module.css'
import PlusButton from "../../UI/PlusButton/PlusButton";
import MinusButton from "../../UI/MinusButton/MinusButton";
import TypesOfValue from "./constants/TypesOfValue";
import './styles/CountedInput.module.css'

const CountedInput = React.memo(function CountedInput({className, valueType = TypesOfValue.squareMeters, inputValue, onChange, ...props}) {
  const [value, setValue] = useState(() => {
    if (inputValue !== undefined) {
      return inputValue
    }
    return 10
  })
  const [inputValueType, setInputValueType] = useState(valueType)

  const minusValue = useCallback(() => {
    setValue((previous) => {
      if (previous === 1 || previous <= 0) {
        return previous
      }
      if (onChange) {
        onChange(previous-1)
      }
      return previous-1
    })
  }, [onChange])
  const plusValue = useCallback(() => {
    setValue((previous) => {
      if (onChange) {
        onChange(previous+1)
      }
      return previous+1
    })
  }, [onChange])

  return (
    <div className={[styles['counted-input'], className].join(' ')} {...props}>
      <MinusButton onClick={minusValue}/>
      <p
        className={styles['counted-input__value-content']}
        dangerouslySetInnerHTML={{__html: `${value} ${inputValueType}`}}
      />
      <PlusButton onClick={plusValue}/>
    </div>
  );
});

export default CountedInput;