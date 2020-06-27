import actionTypes from '../actions/ActionTypes';

export const loginStart = () => {
    console.log("ytdshrgkmtktyjhgertyjhkr");
    return  dispatch => ({ type: actionTypes.LOGIN.AUTHENTICATING});
}

export const loginFailure = () => {

}

export const loginSuccess = () => {

}
