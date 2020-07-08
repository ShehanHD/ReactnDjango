import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Alerts extends Component{
    static propTypes ={
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const  { error, alert, message } = this.props;
        if(error !== prevProps.message){
            if(error.msg.name){
                alert.error('Name: ' + error.msg.name.join());
            }
            if(error.msg.email){
                alert.error('E-mail: ' + error.msg.email.join());
            }
            if(error.msg.msg){
                alert.error('Msg: ' + error.msg.msg.join());
            }
        }
        if(message !== prevProps.error){
            if(message.leadDeleted) {
                alert.success(message.leadDeleted);
            }
            if(message.leadAdded) {
                alert.success(message.leadAdded);
            }
        }
    }

    render() {
        return <Fragment />;
    }
}

const mapStateToProps = state => ({
    error: state.errorsReducer,
    message: state.messageReducer
})

export default connect(mapStateToProps)(withAlert()(Alerts));