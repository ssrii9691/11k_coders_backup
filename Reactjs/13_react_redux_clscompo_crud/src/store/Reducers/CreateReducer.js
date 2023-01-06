import { ADD_CREATOR, DELETE_CREATOR, GET_CREATOR, UPDATE_CREATOR } from "../actions/actionType";
import { defaultState } from "../defaultState";

export const creatorsReducer=(state=defaultState,action)=>{
 switch (action.type) {
    case GET_CREATOR:
        return {...state,creators:action.payload};
        
    case ADD_CREATOR:
        const newcreator=[...state.creators]
        newcreator.push(action.payload)
        return {...state,creators:newcreator}
    case DELETE_CREATOR:
        return{
            ...state,creators:state.creators.filter(
                (cre)=>cre.email!==action.payload.email
            ),
        }
    case UPDATE_CREATOR:
        let allcreators=[...state.creators]
        allcreators.forEach((cre,i)=>{
            if(cre.email===action.payload.email){
                allcreators[i]=action.payload
            }
        })
        return {...state,creators:allcreators}
    default:
        return state
 }
}