import {REQUEST_DUMMY_START} from "../actions/requestDummyAction"
import {RECEIVE_DUMMY} from "../actions/receiveDummyAction"
const dummy = (state = {}, action) => {

    switch(action.type){
        case "TEST":
            return {
                dummyState1: "dummy"
            };
        case REQUEST_DUMMY_START:
            return {
                ...state,
                isLoading: true
            };
        case RECEIVE_DUMMY:
            if(action.error){
                return {
                    ...state,
                    isLoading: false,
                    error: action.error,
                    data: null
                };
            }else{
                return {
                    ...state,
                    isLoading: false,
                    error: null,
                    data: action.data
                };
            }
        default:
            return state;
    }
};

export default dummy;