import React, {Component, Fragment} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getLeads, delLead } from "../../actions/leads";


class Leads extends Component {
    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        delLead: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getLeads();
    }

    render() {
        return (
            <Fragment>
                <table className="highlight">
                    <thead>
                      <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Message</th>
                      </tr>
                    </thead>

                    <tbody>
                    { this.props.leads.map(lead=>
                        <tr key={lead.id}>
                            <td>{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.msg}</td>
                            <td><button className="btn red" onClick={this.props.delLead.bind(this, lead.id)}>Delete</button></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    leads: state.leadsReducer.leads
})

export default connect(mapStateToProps, { getLeads, delLead })(Leads);