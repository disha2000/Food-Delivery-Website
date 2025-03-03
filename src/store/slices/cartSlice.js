import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState:{
      items: []  
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload)
        },
        deleteItem: (state, action) => {
            console.log(action.payload === state.items[0].id)
            let itemIndexToBeDelete = state.items.findIndex((item) =>  item.id === action.payload);
            console.log(itemIndexToBeDelete)
            if (itemIndexToBeDelete !== -1) {
                state.items.splice(itemIndexToBeDelete, 1)
            }
        },
        clearItems: () => {

        }
    }
}) 

console.log(cartSlice);

export const {addItems, deleteItem, clearItems} = cartSlice.actions
export default cartSlice.reducer;