import { CHANGE_INPUT_VALUE, ADD_LIST, DELETE_LIST} from './store/actionType'

const defaultState = {
    inputValue:'',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
};
export default (state = defaultState,action) => {
    let tempState = JSON.parse(JSON.stringify(state));
    let value = action.value;
    let type = action.type;
    switch(type){
        case CHANGE_INPUT_VALUE:
            tempState.inputValue = value;
            return tempState;
        case ADD_LIST:
            tempState.list = [...new Set([...tempState.list,value])];
            tempState.inputValue = '';
            return tempState;
        case DELETE_LIST:
            tempState.list = tempState.list.filter( (item,index) => {
                return index !== value;
            })
            return tempState;
        default:
            return state;
    }
    
}