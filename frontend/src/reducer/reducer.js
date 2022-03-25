import { combineReducers} from 'redux'

const word = (state={words:[],singleWord:null},action) =>{
    switch(action.type){
        case "GETALL":
            return {...state,words:action?.data}
        case "GETWORD":
            return {...state,singleWord:action?.data}
        case "CREATE":
            return {...state,words:[...state.words,action.data]}
        case "UPDATE":
            return {...state,words:state.words.map((word)=>word._id===action.data._id ? action.data : word)}
        case "DELETE":
            return {...state,words:state.words.filter((word)=>word._id!==action.id)}
        default:
            return state;
    }
}

export default combineReducers({word})