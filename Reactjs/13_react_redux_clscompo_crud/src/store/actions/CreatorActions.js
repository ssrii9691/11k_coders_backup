
import { ADD_CREATOR, DELETE_CREATOR, GET_CREATOR, UPDATE_CREATOR } from './actionType'
import axios from 'axios'

function getcreatorFromAPI(dispatch){
    axios.get("http://localhost:3200/users").then((response)=>{
        dispatch({
            type:GET_CREATOR,
            payload:response.data
        })
    })
}

export const getcreatorAsyncAction=()=>{
    return(dispatch)=>{
        getcreatorFromAPI(dispatch)
    }
}

export const addcreatorasyncaction=(creator)=>{
    return (dispatch)=>{
        axios.post("http://localhost:3200/users",creator).then(()=>{
            getcreatorFromAPI(dispatch)
        })
    }
}

export const deletecreatorasyncaction=(creator)=>{
    return(dispatch)=>{
        axios.delete("http://localhost:3200/users/"+creator.id).then(()=>{
            getcreatorFromAPI(dispatch)
        })
    }

}

export const updatecreatorasyncaction=(creator)=>{
 return(dispatch)=>{
    axios.put("http://localhost:3200/users/"+creator.id,creator).then(()=>{
        getcreatorFromAPI(dispatch)
    })
 }
}
export const AddcreatorAction=(creator)=>{
    return {
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
export const updateCreatorAction=(creator)=>{
    return{
        type:UPDATE_CREATOR,
        payload:creator
    }
}