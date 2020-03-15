import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import requestDummyAction from "./actions/requestDummyAction";

function App({isLoading, data, error, requestDummyAction}) {
  return (
    <div className="App">
      Root Component
      <div className="button-container">
          <button onClick={requestDummyAction}>
            {isLoading ? "Performing Action..." : "Perform Action"}
          </button>
        <p>
            Action Status: {isLoading? "In Progress" : error? "Error" : data ? "Success" : "Not Started"}
        </p>
      </div>
    </div>
  );
}

export default connect(
  state => ({
    isLoading: state.dummy.isLoading,
    data: state.dummy.data,
    error: state.dummy.error
  }),
  {
    requestDummyAction
  }
)(App);
