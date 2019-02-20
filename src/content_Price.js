import React, { Component } from 'react';


class Price extends Component {
  state = {}

  componentDidMount(){
    // 외부 라이브러리 연동: D3, masonry, etc
    // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
    // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
    this._getPrice()
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
      .catch(error => console.log(error))
    }

  render() {
    return (
      <article className="box__price">
        <h2 className="h_type">Live Prices <span><span></span>09:29</span></h2>

        <table className="type09">
          <caption>Cryptocurrency Live</caption>
          <thead>
            <tr>
              <th>
                <a href="https://cryptowat.ch/markets/bithumb/btc/krw">BTC/KRW</a>
              </th>
              <th>
                <a href="https://cryptowat.ch/markets/bithumb/eth/krw">ETH/KRW</a>
              </th>
              <th><a href="https://cryptowat.ch/markets/bithumb/xrp/krw">XRP/KRW</a>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="active">
                <a>
                  <div>₩ 4,233,155</div>
                </a>
              </td>
              <td className="active">
                <a>
                  <div>₩ 154,502</div>
                </a>
              </td>
              <td className="active">
                <a>
                  <div>₩ 348</div>
                </a>
              </td>
            </tr>
            <tr>
              <td className="active">
                <a>
                  <div>-1.79 %</div>
                </a>
              </td>
              <td className="active">
                <a>
                  <div>-5.26 %</div>
                </a>
              </td>
              <td className="active">
                <a>
                  <div>-2.79 %</div>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    );
  }
}

export default Price;
