import React, { Component } from 'react';


class Price extends Component {
  state = {
    BTC : null,
    ETH : null,
    XRP : null,
    BTC_PERCENT : null,
    ETH_PERCENT : null,
    XRP_PERCENT : null
  }

  componentDidMount(){
    this._getPrice()
  }
  componentDidUpdate(){
    console.log("test")
  }

  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps: " + JSON.stringify(nextProps));
  }

  // _renderPrice = () =>{
  //   const price = this.state.price.map((price)=>{
  //     return <Pricecontent price={price.btc.krw.price} />
  //   });
  //   return price
  // }

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
        <h2 className="h_type">Live Prices <span><span></span>09:29</span></h2>
        <ul className="list__coin">
          <li>
            <dl>
              <dt>BTC/KRW</dt>
              <dd>{this.state.BTC_PRICE}</dd>
              <dd>{this.state.BTC_PERCENT}%</dd>
            </dl>
          </li>
           <li>
            <dl>
            <dt>ETH/KRW</dt>
            <dd>{this.state.ETH_PRICE}</dd>
            <dd>{this.state.ETH_PERCENT}%</dd>
            </dl>
          </li>
          <li>
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

function Pricecontent({price,pricepercent}){
  return(
    <li>
      <dl>
        <dt>BTC/KRW</dt>
        <dd>{price}</dd>
        <dd>-0.44%</dd>
      </dl>
    </li>
  )
}

export default Price;
