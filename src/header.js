import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify'; //팝업
import 'react-toastify/dist/ReactToastify.css'; //팝업

class Header extends Component {
    state = {}

    constructor(props){
        super(props);
        this.state = {currentCount:60}
      }

    timer() {
    this.setState({
        currentCount: this.state.currentCount - 1
    })
    if(this.state.currentCount < 1) {
        this.setState({currentCount:60})
        this.popup()
        console.log("데이터비교 및 값 변경")
        }
    }
    componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
    }
    componentWillUnmount(){
    clearInterval(this.intervalId);
    }

    refresh = () =>{
        this.setState({currentCount:60})
        this.popup()
        console.log("데이터비교 및 값 변경")
    }

    popup = () =>{
       toast("Update check ...");
    }

    render() {
        return (
            <header>
                <h1>Live Cryptocurrency</h1>
                <p className="countdown">{this.state.currentCount}</p>
                <button type="button" className="btn_reload" onClick={this.refresh}><span className="blind">Refresh</span></button>
            </header>
        );
    }
}

export default Header;
