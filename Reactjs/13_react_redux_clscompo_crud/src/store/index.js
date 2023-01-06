import {configureStore} from '@reduxjs/toolkit'
import { creatorsReducer } from './Reducers/CreateReducer'
import thunk from 'redux-thunk'
export const Mainstore=configureStore({
    reducer:{
        creators:creatorsReducer
    },
    middleware:[thunk]
})