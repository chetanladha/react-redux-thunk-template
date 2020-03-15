
export const RECEIVE_DUMMY = "RECEIVE_DUMMY";

const receiveDummy = ({data, error}) => ({
    type: RECEIVE_DUMMY,
    data,
    error
});

export default receiveDummy;