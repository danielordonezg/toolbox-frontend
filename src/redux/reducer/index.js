import { GET_INFO, FILTER_INFO_BY_NAME, RESET } from "../actions";

const initialState = {
    info: [],
    copyinfo: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INFO:
            return {
                ...state,
                info: action.payload,
                copyinfo: action.payload
            }
        case FILTER_INFO_BY_NAME:
            return {
                ...state,
                info: action.payload
            }
        case RESET:
            return {
                ...state,
                info: state.copyinfo
            }
        default:
            return state
    }
}

export default rootReducer