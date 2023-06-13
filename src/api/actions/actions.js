import { LOGIN_SUCCESS, LOGIN_FAILURE, GET_USER_SUCCESS, GET_USER_FAILURE } from './actionType';
import instance from '../../ultils/axios';


export const loginActions = (email, password, setShowLogin, setLogin) => {
  return async (dispatch) => {
    try {
      if (!email || !password) {
        alert('Please enter email and password');
        return;
      }
      const response = await instance.post('/user/login', { email: email, password: password });
      const info = response.data
      let accessToken = info?.accessToken;
      if (accessToken) {
        dispatch(loginSuccess(accessToken));
        localStorage.setItem('user_token', accessToken);
        setShowLogin(false)
        setLogin(true)
      }
    } catch (error) {
      if(dispatch(loginFailure())){
        alert('Email or password is incorrect');
      } 
    }
  };
};

export const loginSuccess = (accessToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: accessToken,
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const profile = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get('/user/profile');
      const info = response.data;
      const user = info?.userData;
      if (user) {
        dispatch(getUserSuccess(user));
      }
    } catch (error) {
      dispatch(getUserFailure());
    }
  }
}

export const getUserSuccess = (user) => {
  return {
    type: GET_USER_SUCCESS,
    payload: user,
  };
}

export const getUserFailure = () => {
  return {
    type: GET_USER_FAILURE,
  };
}