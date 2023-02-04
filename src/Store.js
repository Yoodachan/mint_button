import { configureStore,createSlice } from '@reduxjs/toolkit';

//useState 같은애
let user = createSlice ({
    name : 'user',
    initialState : 'kim'ㅇ;'';
})

export default configureStore({
  reducer: {
    user : user.reducer
  }
}) 