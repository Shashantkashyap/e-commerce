import { configureStore } from '@reduxjs/toolkit'

//import thunk from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';

import rootreducers from "./Components/redux/reducer/main";


//const middleware = [thunk];

const store = configureStore({
    reducer : rootreducers,
   
});

export default store;