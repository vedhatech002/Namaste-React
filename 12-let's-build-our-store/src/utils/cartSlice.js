import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //reducer functions mapped to  the actions
    //reducer function has two parameters(state,action)  and itmodify the state based on the action
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0; //[]
    },
  },
});

//export our action and reducer

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
