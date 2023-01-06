import { ADD_CREATORS } from "./actionTypes"

export const addcreatorAction=(creator)=>{
    return{
        type:ADD_CREATORS,
        payload:creator
    }
}