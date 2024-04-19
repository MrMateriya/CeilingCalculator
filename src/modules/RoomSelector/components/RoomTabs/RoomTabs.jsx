import React, {useRef, useState} from 'react';
import {memo} from "react";
import styles from './styles/RoomTabs.module.css'

const RoomTabs = memo (function RoomTabs({tabs, className, onSelectTab, onCreateTab}) {
  console.log('Roomtabs render')
  const tabPagesContent = useRef()
  const tabPagesContainer = useRef()
  const scrollSpeed = 0.8
  let startX = 0;
  let startScrollLeft = 0;
  let isScrolling = false;
  let isLeaveTouch = false;
  function setStartScrollLeft(e) {
    e.preventDefault()
    isScrolling = true
    startX = e.clientX;
    startScrollLeft = tabPagesContent.current.scrollLeft
  }
  function scrollingTabs(e) {
    e.preventDefault()
    if (!isScrolling) return
    let difference = startX - e.clientX
    tabPagesContent.current.scrollLeft = startScrollLeft + (difference*scrollSpeed)
  }
  function TouchSetStartScrollLeft(e) {
    isScrolling = true
    startX = e.changedTouches[0].clientX;
    startScrollLeft = tabPagesContent.current.scrollLeft
  }
  function TouchScrollingTabs(e) {
    const boxCoordinates = tabPagesContainer.current.getBoundingClientRect()
    if (!isScrolling) return
    if (!(e.changedTouches[0].clientY < boxCoordinates.bottom
      && e.changedTouches[0].clientY > boxCoordinates.top
      && e.changedTouches[0].clientX > boxCoordinates.left
      && e.changedTouches[0].clientX < boxCoordinates.right)) {
      isLeaveTouch = true;
    }
    if (isLeaveTouch) return;
    let difference = startX - e.changedTouches[0].clientX
    tabPagesContent.current.scrollLeft = startScrollLeft + (difference*scrollSpeed)
  }
  return (
    <div
      onMouseMove={scrollingTabs}
      onMouseUp={() => {isScrolling = false}}
      onMouseLeave={() => {isScrolling = false}}
      onMouseDown={setStartScrollLeft}
      onTouchStart={TouchSetStartScrollLeft}
      onTouchMove={TouchScrollingTabs}
      onTouchEnd={() => {isScrolling = false; isLeaveTouch = false;}}
      ref={tabPagesContainer}
      className={[styles['tab-pages'], className].join(' ')}
    >
      <div ref={tabPagesContent} className={styles['tab-pages__content']}>
        {tabs.map((tab) => {
          return (
            <div
              key={tab.id}
              className={styles['tab-pages__item']}
              onClick={(e) => {
                onSelectTab(tab.id)
              }}>
              <p className={styles['tab-pages__title']}>{tab.title}</p>
            </div>

          );})}

        <div
          key={0}
          className={[styles['tab-pages__item'], styles['tab-pages__item_add-room']].join(' ')}
          onClick={(e) => {
            onCreateTab()
          }}>
          <svg className={styles['tab-pages__svg']} width="16" height="16" viewBox="0 0 16 16" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.875 7.5H8.5V5.125C8.5 5.05625 8.44375 5 8.375 5H7.625C7.55625 5 7.5 5.05625 7.5 5.125V7.5H5.125C5.05625 7.5 5 7.55625 5 7.625V8.375C5 8.44375 5.05625 8.5 5.125 8.5H7.5V10.875C7.5 10.9437 7.55625 11 7.625 11H8.375C8.44375 11 8.5 10.9437 8.5 10.875V8.5H10.875C10.9437 8.5 11 8.44375 11 8.375V7.625C11 7.55625 10.9437 7.5 10.875 7.5Z"
              fill="black"/>
            <path
              d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM8 13.8125C4.79063 13.8125 2.1875 11.2094 2.1875 8C2.1875 4.79063 4.79063 2.1875 8 2.1875C11.2094 2.1875 13.8125 4.79063 13.8125 8C13.8125 11.2094 11.2094 13.8125 8 13.8125Z"
              fill="black"/>
          </svg>
          <p className={styles['tab-pages__title']}>Добавить комнату</p>
        </div>
      </div>
    </div>
  );
});

export default RoomTabs;