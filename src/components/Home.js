import React from 'react';
import {connect} from "react-redux";
import requestDummyAction from "../actions/requestDummyAction";
import PropTypes from "prop-types";

const Home = ({isLoading, data, error, requestDummyAction}) => {
  return (
    <div className="Home">
      Home Component
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
};

Home.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array,
  error: PropTypes.any,
  requestDummyAction: PropTypes.func
};

export default connect(
  state => ({
    isLoading: state.dummy.isLoading,
    data: state.dummy.data,
    error: state.dummy.error
  }),
  {
    requestDummyAction
  }
)(Home);
