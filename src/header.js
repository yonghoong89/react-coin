import React, { Component } from 'react';

class Header extends Component {
    state = {}

    render() {
        return (
            <header>
                <h1>Live Cryptocurrency</h1>
                <p className="countdown">60</p>
                <button type="button" className="btn_reload"><span className="blind">Refresh</span></button>
            </header>
        );
    }
}

export default Header;
