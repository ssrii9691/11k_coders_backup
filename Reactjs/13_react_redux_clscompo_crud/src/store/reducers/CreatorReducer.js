import { ADD_CREATORS } from "../actions/actionTypes";
import { defaultState } from "../defaultState";

export const creatorsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CREATORS:
            const newCreators=[...state.creators]
            newCreators.push(action.payload)
            return{...state,creators:newCreators};
    
        default:
            return state
    }
};
