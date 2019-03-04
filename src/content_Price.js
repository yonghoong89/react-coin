import React, { Component } from 'react';


class Price extends Component {

  constructor() {
      super();
      this.state = {
        BTC : null,
        ETH : null,
        XRP : null,
        BTC_PERCENT : null,
        ETH_PERCENT : null,
        XRP_PERCENT : null
      };
    }
  
  componentDidMount(){
    this._getPrice()
  }

  componentDidUpdate(prevProps) {
    //console.log(prevProps)
  }

  componentWillReceiveProps(nextProps) {
    this._callapi()
    //console.log("next"+nextProps)
    // if(JSON.stringify(this.props.user) !== JSON.stringify(nextProps.user)) // Check if it's a new user, you can also use some unique property, like the ID
    // {
    //        this.updateUser();
    // }
} 

  componentWillReceiveProps(nextProps){
    this._callapi()
    console.log(nextProps);
  }

  _getPrice = async () =>{
    const price = await this._callapi()
    //console.log(price)
    this.setState({
      BTC_PRICE : price.BTC.KRW.PRICE,
      ETH_PRICE : price.ETH.KRW.PRICE,
      XRP_PRICE : price.XRP.KRW.PRICE,
      BTC_PERCENT : price.BTC.KRW.CHANGEPCT24HOUR,
      ETH_PERCENT : price.ETH.KRW.CHANGEPCT24HOUR,
      XRP_PERCENT : price.XRP.KRW.CHANGEPCT24HOUR
    })
  }

  _callapi = () =>{
    return fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP&tsyms=KRW')
    .then(potato => potato.json())//데이터를 상황에 맞게 편집 할 수 있음
    .then(json => json.DISPLAY) //CHANGEPCTDAY ,PRICE
    .catch(error => console.log(error))
  }

  render() {
    return (
      <article className="box__price">
        <h2 className="h_type">Live Prices <span><span></span><Update_time /></span></h2> 
        <ul className="list__coin">
          <li className="active">
            <dl>
              <dt>BTC/KRW</dt>
              <dd>{this.state.BTC_PRICE}</dd>
              <dd>{this.state.BTC_PERCENT}%</dd>
            </dl>
          </li>
           <li className="active">
            <dl>
            <dt>ETH/KRW</dt>
            <dd>{this.state.ETH_PRICE}</dd>
            <dd>{this.state.ETH_PERCENT}%</dd>
            </dl>
          </li>
          <li className="active">
            <dl>
            <dt>XRP/KRW</dt>
            <dd>{this.state.XRP_PRICE}</dd>
            <dd>{this.state.XRP_PERCENT}%</dd>
            </dl>
          </li>
        </ul>
      </article>
    );
  }
}

const Update_time = ({  }) => {
  return(
    <time>00:00</time>
  )
}


export default Price;
