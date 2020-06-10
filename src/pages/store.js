import { createStore } from "redux";


  const initialstate = {
    user:{
      email:'',
      password:'',
      isAuthenticated:false
    }
  }
  
  function reducer (state=initialstate,action){
    if(action.type==='LOGIN'){
      state.user = action.payload
      state.user.isAuthenticated = true;
    }
    return state
  
  }
  const store = createStore(
    reducer,
    // Hooks up Redux Devtools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  export default store;