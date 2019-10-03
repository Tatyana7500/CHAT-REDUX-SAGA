import {LOCALHOST} from "../../constants";
import requestHelper from "../utils/requestHelper";

export const registerUserService = async (request) => {
    const url = `${LOCALHOST}/signin`;
    const response = await requestHelper.sendPost(url, request.payload);
    console.log(response.text());
    return response;
};