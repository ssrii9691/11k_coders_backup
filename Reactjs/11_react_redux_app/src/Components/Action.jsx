export const addemployeeaction=()=>{
    return{
        type:"addemployee",
        paload:"Sai"
    }
}

export const deleteemployeeaction=(emp)=>{
    return{
        type:"deleteemployee",
        paload:emp
    }
}