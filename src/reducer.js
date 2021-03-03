const initialState={
    count:100,
    isdisable:true,
    isLoggedin:false,
    user:'',
    data:[],
    buttondata:[]
}

const reducer=(state=initialState,action)=>{
  
    switch(action.type){
        case 'DEBIT':
            return{
                ...state,
                count:state.count+10,
                isdisable:false,
                data:[...state.data,state.count],
                buttondata:[...state.buttondata,action.payload]
            }
            case 'CREDIT':
                return{
                    ...state,
                    count:state.count-10,
                    data:[...state.data,state.count],
                    buttondata:[...state.buttondata,action.payload]
                }
                case 'LOGIN':
                    return{
                        ...state,
                        user:action.payload,
                        isLoggedin:true
                    }
                    case 'DELETE':
                        // console.log("DELETE",action.payload);
                        const filtereddata = state.buttondata.filter(item => item.id != action.payload.id);
                        return { ...state, buttondata: filtereddata };
                        
                      
                default:
                    return state
    }
}
export default reducer;