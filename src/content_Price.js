import React, { Component } from 'react';


class Price extends Component {
  render() {
    const price_info = this.props;
    return (
      <article className="box__price">
        <h2 className="h_type">Live Prices <span><span class="icon_update">업데이트 시간</span><Update_time /></span></h2> 
        <ul className="list__coin">
          <li className="active">
            <dl>
              <dt>BTC/KRW</dt>
              <dd>{price_info.BTC_PRICE}</dd>
              <dd>{price_info.BTC_PERCENT}%</dd>
            </dl>
          </li>
           <li className="active">
            <dl>
            <dt>ETH/KRW</dt>
            <dd>{price_info.ETH_PRICE}</dd>
            <dd>{price_info.ETH_PERCENT}%</dd>
            </dl>
          </li>
          <li className="active">
            <dl>
            <dt>XRP/KRW</dt>
            <dd>{price_info.XRP_PRICE}</dd>
            <dd>{price_info.XRP_PERCENT}%</dd>
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
