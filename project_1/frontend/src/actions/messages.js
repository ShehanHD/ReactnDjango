import {CREATE_MSG} from "./types";

export const createMessage = msg =>{
    return{
        type: CREATE_MSG,
        payload: msg
    }
}