import React, { Component } from 'react';


class Price extends Component {
  state = {}

  componentDidMount(){
    this._getPrice()
  }  

  _renderPrice = () =>{
    const price = this.state.price.map((price)=>{
      return <Pricecontent price={price.btc.krw.price} />
    });
    return price
  }

  _getPrice = async () =>{
    const price = await this._callapi() 
    console.log(price)
    this.setState({
      price:price //모던 자바스크립트 :  price
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
          {this.state.price ? this._renderPrice() : "loading"}
          {/*
          <li>
            <dl>
              <dt>BTC/KRW</dt>
              <dd>₩ 4,346,276</dd>
              <dd>-0.44%</dd>
            </dl>
          </li>
           <li>
            <dl>
            <dt>ETH/KRW</dt>
            <dd>₩ 160,562</dd>
            <dd>-1.16%</dd>
            </dl>
          </li>
          <li>
            <dl>
            <dt>XRP/KRW</dt>
          <dd>₩ 352</dd>
          <dd>-2.47%</dd>
            </dl>
          </li> */}
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
