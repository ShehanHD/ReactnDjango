import axios from 'axios';
import {GET_LEADS, DEL_LEAD, ADD_LEAD, GET_ERRORS, CREATE_MSG} from "./types";
import {createMessage} from "./messages";

// GET_LEADS
export const getLeads = () => dispatch => {
    axios.get('/api/leads')
        .then(res=>{
            dispatch({
                type: GET_LEADS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

// ADD_LEAD
export const addLead = lead => dispatch => {
    axios.post('/api/leads/',lead)
        .then(res=>{
            dispatch(createMessage({ leadAdded: "Lead Added"}));
            dispatch({
                type: ADD_LEAD,
                payload: res.data
            })
        }).catch(err =>{
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        })
}

// DEL_LEAD
export const delLead = id => dispatch => {
    axios.delete(`/api/leads/${id}/`)
        .then(res=>{
            dispatch(createMessage({ leadDeleted: "Lead Deleted"}));
            dispatch({
                type: DEL_LEAD,
                payload: id
            })
        }).catch(err =>{
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        })
}
