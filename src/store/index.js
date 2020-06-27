import {createStore, combineReducers} from 'redux';
import loginReducer from './reducers/loginReducer';

const reducer = combineReducers({login: loginReducer});

const initialState = {
    login:{
        authenticating:false,
        auth_failure:false,
        auth_success:false,
        username:'',
        password:''
    }
};
const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;