import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
class War extends Component {

    constructor(props) {
        super(props);
        if (!!!sessionStorage.getItem("user")) {
            this.props.history.push('/registration');
        }
    }

    render() {
        return (
            <div>
                <h1>WAR</h1>
            </div>
        );
    }

}

export default withRouter(War);
