import { FETCH_POTS_REQUEST, FETCH_POTS_SUCCESS, FETCH_POTS_ERROR } from '../contants/postContant'

const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: null
}

function postReducers(state = initialState, payload) {
    switch (payload.type) {
        case FETCH_POTS_REQUEST:
            return {
                ...state,
                requesting: true
            }
        case FETCH_POTS_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: payload.data
            }
        case FETCH_POTS_ERROR:
            return {
                ...state,
                requesting: false,
                success: false,
                message: payload.message
            }
        default:
            return state;


    }
}
export default postReducers;