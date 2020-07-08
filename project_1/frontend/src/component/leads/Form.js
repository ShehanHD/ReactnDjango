import React, {Component} from 'react';
import { addLead } from "../../actions/leads";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class Form extends Component {
    state = {
        name: '',
        email: '',
        msg: ''
    }

    static propTypes = {
        addLead: PropTypes.func.isRequired
    }

    onChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const { name, email, msg} = this.state;
        const lead = { name, email, msg};
        this.props.addLead(lead);

        this.setState({
            name: "",
            email: "",
            msg: ""
        })
    }

    render() {
        return (
            <div className="container">
                <h3>Add Lead</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="input-field">
                        <input type="text" id="name" value={this.state.name} className="validate" onChange={this.onChange}/>
                            <div className="err"></div>
                            <label htmlFor="name">Nome</label>
                    </div>
                    <div className="input-field">
                        <input type="email" id="email" value={this.state.email} onChange={this.onChange} className="validate" />
                            <div className="err"></div>
                            <label htmlFor="email">E-mail</label>
                    </div>
                    <div className="input-field">
                        <input type="text" id="msg" value={this.state.msg} onChange={this.onChange} className="validate" />
                            <div className="err"></div>
                            <label htmlFor="msg">Message</label>
                    </div>
                    <button className="btn waves-effect waves-light right" type="submit" name="submit">Submit</button>
                </form>
            </div>
        );
    }
}


export default connect( null, { addLead })(Form);