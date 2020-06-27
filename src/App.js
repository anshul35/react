import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {loginStart} from './store/actions/loginActions.js';
import actionTypes from './store/actions/ActionTypes.js';


function App(props) {
return (
    <div className="App">
    <h4 className = "heading">Login</h4>
    <form onSubmit={props.login}>
        <label>First name:</label>
        <input type = "text" id="fname" name="fname">
        </input><br></br>
        <label>Last name:</label>
        <input type = "text" id="lname" name="lname">
        </input><br></br><hr></hr>
        <input type = "submit" value= "Submit" className = "lbutton"></input>
    </form>
    </div>
);
};

const MapStateToProps = (state) => {
    return {
    info: state.login
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        login : ()=> dispatch => (loginStart)
    };
};
export default connect(MapStateToProps, MapDispatchToProps)(App);

