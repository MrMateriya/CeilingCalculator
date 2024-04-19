import React, {useCallback, useEffect, useState, memo} from 'react';
import CountedInput from "../../../../components/CountedInput/CountedInput";
import typesOfValue from "../../../../components/CountedInput/constants/TypesOfValue";
import SelectorInput from "../../../../components/SelectorInput/SelectorInput";
import styles from './styles/RoomForm.module.css'
import TextButton from "../../../../UI/TextButton/TextButton";
import {useDispatch, useSelector} from "react-redux";
import {
  changeColor,
  changeNumberCorners,
  changeSquareMeters,
  changeTexture,
  changeTotalPrice
} from "../../store/RoomFormsSlice";

const RoomForm = memo(function RoomForm({className, id, style}) {
  console.log('RoomForm rendring')

  const [textureOptions, setTextureOptions] = useState([
    {id: 1, value: 'glossy', text: 'Глянцевая'},
    {id: 2, value: 'matte', text: 'Матовая'},
    {id: 3, value: 'satin', text: 'Сатиновая'},
    {id: 4, value: 'fabric', text: 'Тканевая'},
    {id: 5, value: 'exclusive', text: 'Эксклюзивная'},
  ])
  const [colorOptions, setColorOptions] = useState([
    {id: 1, value: 'white', text: 'Белый'},
    {id: 2, value: 'colored', text: 'Цветной'},
  ])

  function setReduxRoom(state, id) {
    return state.roomForms.roomForms.find(room => room.id === id)
  }

  const numberCorners = useSelector(state => setReduxRoom(state, id).numberCorners)
  const squareMeters = useSelector(state => setReduxRoom(state, id).squareMeters)
  const texture = useSelector(state => setReduxRoom(state, id).texture)
  const color = useSelector(state => setReduxRoom(state, id).color)
  const totalPrice = useSelector(state => setReduxRoom(state, id).totalPrice)
  const dispatch = useDispatch()

  // Обновляет элемент после основного рендра еще 1 раз
  useEffect(() => {
    calculateTotalPrice()
  }, [squareMeters, numberCorners, texture, color]);

  function calculateTotalPrice() {
    let TextureAndColor = texture.value + ' ' + color.value;
    let priceTextureAndColor = 1;
    switch (TextureAndColor) {
      case 'fabric white':
        priceTextureAndColor = 2250
        break;
      case 'fabric colored':
        priceTextureAndColor = 2500
        break;
      case 'glossy white':
        priceTextureAndColor = 1450
        break;
      case 'glossy colored':
        priceTextureAndColor = 2350
        break;
      case 'matte white':
        priceTextureAndColor = 1200
        break;
      case 'matte colored':
        priceTextureAndColor = 2200
        break;
      case 'satin white':
        priceTextureAndColor = 1200
        break;
      case 'satin colored':
        priceTextureAndColor = 2100
        break;
      case 'exclusive white':
        priceTextureAndColor = 1
        break;
      case 'exclusive colored':
        priceTextureAndColor = 1
        break;
      default:
        priceTextureAndColor = 1
          break;
    }
    cashedSetTotalPrice((priceTextureAndColor * squareMeters + numberCorners * 100))
  }

  //For avoiding rerender memo components, functions create each rerender
  const cashedSetSquareMeters = useCallback(value => {dispatch(changeSquareMeters({squareMeters: value, id: id}))}, [])
  const cashedSetNumberCorners = useCallback(value => {dispatch(changeNumberCorners({numberCorners: value, id: id}))}, [])
  const cashedSetTexture = useCallback(value => {dispatch(changeTexture({texture: value, id: id}))}, [])
  const cashedSetColor = useCallback(value => {dispatch(changeColor({color: value, id: id}))}, [])
  const cashedSetTotalPrice = useCallback(value => {dispatch(changeTotalPrice({totalPrice: value, id: id}))}, [])

  // const countedSquareMetersInputHandler = useCallback((value) => {cashedSetSquareMeters(value); calculateTotalPrice()})

  return (
    <div className={[styles['room-form'], className].join(' ')} key={id} style={style}>
      <div className={styles['inputs-list']}>
        <div className={styles['inputs-list__item']}>
          <p className={styles['inputs-list__title']}>Площадь помещения: </p>
          <CountedInput
            inputValue={squareMeters}
            onChange={cashedSetSquareMeters}
            className={styles['inputs-list__input']}
            valueType={typesOfValue.squareMeters}
          />
        </div>
        <div className={styles['inputs-list__item']}>
          <p className={styles['inputs-list__title']}>Количество углов: </p>
          <CountedInput
            inputValue={numberCorners}
            onChange={cashedSetNumberCorners}
            className={styles['inputs-list__input']}
            valueType={typesOfValue.pieces}
          />
        </div>
        <div className={styles['inputs-list__item']}>
          <p className={styles['inputs-list__title']}>Фактура потолка</p>
          <SelectorInput
            inputValue={texture}
            onChange={cashedSetTexture}
            className={styles['inputs-list__input']}
            options={textureOptions}
          />
        </div>
        <div className={styles['inputs-list__item']}>
          <p className={styles['inputs-list__title']}>Цвет потолка:</p>
          <SelectorInput
            inputValue={color}
            onChange={cashedSetColor}
            className={styles['inputs-list__input']}
            options={colorOptions}
          />
        </div>
      </div>

      <div className={styles['total-price']}>
        <p className={styles['total-price__cost']}>
          Итого: <span className={styles['total-price__value']}>{totalPrice.toLocaleString('en')}</span> руб.
        </p>
        <p className={styles['total-price__caveat']}>(Ориентировочная стоимость)</p>
      </div>

      <div className={styles['buttons-list']}>
        <TextButton
          type={'filled'}
          descriptionText={'При оформлении заказа вы соглашаетесь с политикой конфиденциальности.'}
          className={styles['buttons-list__item']}>
          Оформить заказ
        </TextButton>
        <TextButton
          type={'outlined'}
          className={styles['buttons-list__item']}>
          Скачать смету
        </TextButton>
      </div>

    </div>
  );
});

export default RoomForm;