import React, { Component, Fragment } from 'react';
import Header from './header';
import Price from './content_Price';
import News from './content_News';
import { ToastContainer, toast } from 'react-toastify'; //팝업
import './App.css';
import 'react-toastify/dist/ReactToastify.css'; //팝업

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentCount:60,
      BTC_PRICE : null,
      ETH_PRICE : null,
      XRP_PRICE : null,
      BTC_PERCENT : null,
      ETH_PERCENT : null,
      XRP_PERCENT : null,
    }
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(prevState)
    // 여기서는 setState 를 하는 것이 아니라
    // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
    // 사용됩니다.
    /*
    if (nextProps.value !== prevState.value) {
      return { value: nextProps.value };
    }
    return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
    */
  }
  componentDidMount(){
    this._getPrice();
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }

  _callapi = () =>{
    return fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP&tsyms=KRW')
    .then(potato => potato.json())//데이터를 상황에 맞게 편집 할 수 있음
    .then(json => json.DISPLAY) //CHANGEPCTDAY ,PRICE
    .catch(error => console.log(error))
  }

  _getPrice = async () =>{
    const price = await this._callapi()
    this.setState({
      BTC_PRICE : price.BTC.KRW.PRICE,
      ETH_PRICE : price.ETH.KRW.PRICE,
      XRP_PRICE : price.XRP.KRW.PRICE,
      BTC_PERCENT : price.BTC.KRW.CHANGEPCT24HOUR,
      ETH_PERCENT : price.ETH.KRW.CHANGEPCT24HOUR,
      XRP_PERCENT : price.XRP.KRW.CHANGEPCT24HOUR
    })
  }

  handleCreate = (data) =>{
    //console.log(data);
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
    
  componentWillUnmount(){
    //clearInterval(this.intervalId);
  }

  refresh = () =>{
      this.setState({currentCount:60})
      this.popup()
      this._getPrice()
      console.log("버튼클릭 시 데이터비교 및 값 변경")
  }

  popup = () =>{
      toast("Update check ...");
  }

  render() {
    console.log()
    return (
      <Fragment>
        {/* <Header onCreate={this.handleCreate} /> */}
        <Header currentCount={this.state.currentCount} refresh={this.refresh} />
        <div className="bx">
          <Price BTC_PRICE={this.state.BTC_PRICE} ETH_PRICE={this.state.ETH_PRICE} XRP_PRICE={this.state.XRP_PRICE} BTC_PERCENT={this.state.BTC_PERCENT} ETH_PERCENT={this.state.ETH_PERCENT} XRP_PERCENT={this.state.XRP_PERCENT} />
          <News />
        </div>
      </Fragment>
    );
  }

}

export default App;
