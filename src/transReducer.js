 const TransactionReducer = ((state, action)=>{
    switch(action.type){
        case "ADD_TRANSACTION": {
            return [action.payload, ...state] /* agar sabse pehle inserted element ko list k top pe rkhna hai to [ ...state,action.payload] use krenge */
        }
        case "DEL_TRANSACTION":{
            return state.filter((item)=> item.id !== action.payload.id)
        }
        default:
            return state;
    }
})

export default TransactionReducer; 

/* const TransactionReducer =  ((state, action)=>{
    switch(action.type){
        case "ADD_TRANSACTION": {
            return [action.payload, ...state]
        } 
        default:
            return state;
    }
})

export default TransactionReducer; */