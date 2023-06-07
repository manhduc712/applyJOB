import { FETCH_POTS_REQUEST, FETCH_POTS_SUCCESS, FETCH_POTS_ERROR } from '../contants/postContant'
export const loadPost = () => async dispatch => {
    try {
        dispatch({ type: FETCH_POTS_REQUEST });

        const url = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(url);
        const responseBody = await response.json();

        dispatch({
            type: FETCH_POTS_SUCCESS,
            data: responseBody
        });

    } catch (error) {
        console.log(error);

        dispatch({
            type: FETCH_POTS_ERROR,
            message: error
        });
    }
}

