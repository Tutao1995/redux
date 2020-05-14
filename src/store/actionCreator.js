import { CHANGE_INPUT_VALUE, ADD_LIST, DELETE_LIST} from './actionType'

export const changeInputCreator = (value) => {
    return {
        type:CHANGE_INPUT_VALUE,
        value:value
    }
}
export const addListCreator = (value) => {
    return {
        type:ADD_LIST,
        value:value
    }
}
export const deleteListCreator = (value) => {
    return {
        type:DELETE_LIST,
        value:value
    }
}