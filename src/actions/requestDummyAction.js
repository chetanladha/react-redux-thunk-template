import Axios from "axios";
import receiveDummyAction from "./receiveDummyAction";

export const REQUEST_DUMMY_START = "REQUEST_DUMMY_START";

const startRequestDummy = () => (
    {
        type: REQUEST_DUMMY_START
    });

const requestDummy = () => async (dispatch) => {
    try {
        dispatch(startRequestDummy());
        const response = await Axios.get("https://jsonplaceholder.typicode.com/todos");
        dispatch(receiveDummyAction({data: response.data}));
    } catch (error) {
        dispatch(receiveDummyAction({error}));
    }
};

export default requestDummy;