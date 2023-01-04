import { ADD_CREATOR, DELETE_CREATOR } from "./Action_Types"

export const addCreatorAction=(creator)=>{
  return{
    type:ADD_CREATOR,
    payload:creator
  }
}

export const deleteCreatorAction=(creator)=>{
      return{
        type:DELETE_CREATOR,
        payload:creator
      }
}