import React, {useCallback, useState} from 'react';
import RoomForm from "../RoomForm/RoomForm";
import roomImage from '../RoomTabs/assets/images/room.png'
import styles from './styles/RoomSelector.module.css'
import RoomTabs from "../RoomTabs/RoomTabs";
import {useDispatch, useSelector} from "react-redux";
import {addRoomFrom} from "../../store/RoomFormsSlice";

const RoomSelector = ({className}) => {
  const dispatch = useDispatch()
  const RoomsCounter = useSelector(state => state.roomForms.roomFormsCounter)

  const [roomTabs, setRoomTabs] = useState([
    {id: 1, title: 'Комната №1'},
  ])
  const [currentTab, setCurrentTab] = useState(roomTabs[0])

  const selectTab = useCallback((tabId) => {
    setCurrentTab(roomTabs.find(tab => {
      if (tab.id === tabId) {
        return true
      }
      return false
    }))
  }, [roomTabs])

  const createTab = useCallback(() => {
    setRoomTabs([...roomTabs, {
      id: RoomsCounter+1,
      title: `Комната №${roomTabs.length+1}`
    }])
    dispatch(addRoomFrom({id: RoomsCounter+1, totalPrice: 0, squareMeters: 0, numberCorners: 0, texture: {id: 1, value: 'glossy', text: 'Глянцевая'}, color: {id: 1, value: 'white', text: 'Белый'}}))
  }, [roomTabs])

  return (
    <div className={[styles['room-selector'], className].join(' ')}>

      <RoomTabs currentTab={currentTab} className={styles['room-selector__tab-pages']} tabs={roomTabs} onSelectTab={selectTab} onCreateTab={createTab}/>

      <div className={[styles['room-selector__page-content'], styles['page-content']].join(' ')}>
        {
          <RoomForm key={currentTab.id} id={currentTab.id}/>
        }
        <div className={styles['page-content__image-container']}>
          <img className={styles['page-content__image']} src={roomImage} alt='room'/>
        </div>
      </div>
    </div>
  );
};

export default RoomSelector;