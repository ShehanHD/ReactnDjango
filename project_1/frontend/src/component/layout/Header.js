import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className={"indigo"}>
                    <div className="nav-wrapper container">
                        <a href="#" className="brand-logo">Logo</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">

                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;;