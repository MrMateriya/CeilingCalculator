import React from 'react';
import styles from './styles/CeilingCalculatorPage.module.css'
import {RoomSelector} from "../../../../modules/RoomSelector";
const CeilingCalculatorPage = () => {
  return (
    <div className={[styles['ceiling-calculator-page']].join(' ')}>
      <h1 className={[styles['page-title'], styles['container']].join(' ')}>Рассчитайте стоимость Вашего потолка онлайн!</h1>
      <RoomSelector className={[styles['page-selector'], styles['container']].join(' ')}/>
    </div>
  );
};

export default CeilingCalculatorPage;