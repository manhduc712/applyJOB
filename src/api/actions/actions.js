import { LOGIN_SUCCESS, LOGIN_FAILURE, GET_USER_SUCCESS, GET_USER_FAILURE, REGISTER_SUCCESS, REGISTER_FAILURE, EDIT_USER_SUCCESS, EDIT_USER_FAILURE } from './actionType';
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
      if (dispatch(loginFailure())) {
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

export const registerActions = (email, password, firstname, lastname, setShowRegister, setShowLogin, setEmail, setPassword) => {
  return async (dispatch) => {
    try {
      if (!email || !password || !firstname || !lastname) {
        alert('Please enter email, password and name');
        return;
      }
      console.log(email, password, firstname, lastname)
      await instance.post('/user/register', { email: email, password: password, firstname: firstname, lastname: lastname });
      dispatch(registerSuccess());
      setShowRegister(false);
      setEmail('');
      setPassword('');
      setShowLogin(true);
    } catch (error) {
      if (dispatch(registerFailure())) {
        alert('Email is already in use');
      }
    }
  };
};

export const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS
  };
};

export const registerFailure = () => {
  return {
    type: REGISTER_FAILURE,
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

export const editActions = (firstname, lastname, gender, mobile, address) => {
  return async (dispatch) => {
    try {
      const response = await instance.post('/user/edit', firstname, lastname, gender, mobile, address);
      const info = response.data;
      if (info) {
        dispatch(editUserSuccess(info));
      }
    } catch (error) {
      dispatch(editUserFailure());
    }
  }
}

export const editUserSuccess = () => {
  return {
    type: EDIT_USER_SUCCESS,
  };
}

export const editUserFailure = () => {
  return {
    type: EDIT_USER_FAILURE,
  };
}