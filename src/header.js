import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Live Cryptocurrency</h1>
                <p className="countdown">{this.props.currentCount}</p>
                <button type="button" className="btn_reload" onClick={this.props.refresh}><span className="blind">Refresh</span></button>
            </header>
        );
    }
}

export default Header;
