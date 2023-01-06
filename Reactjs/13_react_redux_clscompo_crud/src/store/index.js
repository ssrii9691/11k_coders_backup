import {configureStore} from '@reduxjs/toolkit'
import { creatorsReducer } from './reducers/CreatorReducer'
export const MainStore=configureStore({
    reducer:{
        creators:creatorsReducer
    }
})