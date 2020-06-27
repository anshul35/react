import actionTypes from '../actions/ActionTypes';


const loginReducer = (state = {}, {type}) => {
    switch(type) {
        case actionTypes.LOGIN.AUTHENTICATING: {
            return {
                ...state,
                authenticating:true,
            }
        }
        case actionTypes.LOGIN.AUTHENTICATION_FAILURE:{
            return{
                ...state,
                auth_failure:true,
            }
        }
        case actionTypes.LOGIN.AUTHENTICATION_SUCCESS:{
            return{
                ...state,
                auth_success:true,
            }
        }
        default : return state
    }
};

export default loginReducer;