import {createSlice} from "@reduxjs/toolkit";

function replaceRoom(state, id, roomToChange) {
  state.roomForms = state.roomForms.map(room => {
    if (room.id !== id) {
      return room
    }
    if (room.id === id) {
      return roomToChange
    }
  })
}

const RoomFormsSlice = createSlice({
  name: 'RoomForms',
  initialState: {
    roomForms: [
      {id: 1, totalPrice: 0, squareMeters: 50, numberCorners: 50, texture: {id: 1, value: 'glossy', text: 'Глянцевая'}, color: {id: 1, value: 'white', text: 'Белый'}},
    ],
    roomFormsCounter: 1,
  },
  reducers: {
    changeNumberCorners(state, action) {
      const roomToChange = state.roomForms.find(room => room.id === action.payload.id)
      roomToChange.numberCorners = action.payload.numberCorners
      replaceRoom(state, action.payload.id, roomToChange)
    },
    changeSquareMeters(state, action) {
      const roomToChange = state.roomForms.find(room => room.id === action.payload.id)
      roomToChange.squareMeters = action.payload.squareMeters
      replaceRoom(state, action.payload.id, roomToChange)
    },
    changeTexture(state, action) {
      const roomToChange = state.roomForms.find(room => room.id === action.payload.id)
      roomToChange.texture = action.payload.texture
      replaceRoom(state, action.payload.id, roomToChange)
    },
    changeColor(state, action) {
      const roomToChange = state.roomForms.find(room => room.id === action.payload.id)
      roomToChange.color = action.payload.color
      replaceRoom(state, action.payload.id, roomToChange)
    },
    changeTotalPrice(state, action) {
      const roomToChange = state.roomForms.find(room => room.id === action.payload.id)
      roomToChange.totalPrice = action.payload.totalPrice
      replaceRoom(state, action.payload.id, roomToChange)
    },
    addRoomFrom(state, {payload}) {
      state.roomFormsCounter += 1;
      state.roomForms.push({id: payload.id,
        totalPrice: payload.totalPrice,
        squareMeters: payload.squareMeters,
        numberCorners: payload.numberCorners,
        texture: payload.texture,
        color: payload.color})
    },
  }
})

export const { changeTotalPrice, addRoomFrom, changeNumberCorners, changeSquareMeters, changeColor, changeTexture} = RoomFormsSlice.actions
export default RoomFormsSlice.reducer