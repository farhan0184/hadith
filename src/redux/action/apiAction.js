import { api } from "@/util/api";
import { failure, getApiCallSuccess, loading } from "../slices/slice";


export const getApiAction = () => async (dispatch) => {
    dispatch(loading())
    try {
        const response = await api.get('/books');
        // console.log(response)
        dispatch(getApiCallSuccess(response.data));
    } catch (error) {
        dispatch(failure(error.message));
    }
};