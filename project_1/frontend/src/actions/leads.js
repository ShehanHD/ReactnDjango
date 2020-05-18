import axios from 'axios';
import { GET_LEADS, DEL_LEAD } from "./types";

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

// DEL_LEAD
export const delLead = (id) => dispatch => {
    axios.delete(`/api/leads/${id}/`)
        .then(res=>{
            dispatch({
                type: DEL_LEAD,
                payload: id
            })
        }).catch(err => console.log(err))
}
