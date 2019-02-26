import React, { Component } from 'react';

class News extends Component {
  state = {
    max_length : null,
    news_length : 5
  }

  componentDidMount(){ //데이터 get
    this._getNews()
  }
  
  _renderNews = () =>{
    const number = this.state.news_length //시작점
    const news = this.state.news.slice(0,number).map((news)=>{
      return <News_content image={news.source_info.img} link={news.guid} title={news.title} content={news.body} />
    });
  
    return news
  }
  
  _getNews = async () =>{
    const news = await this._callapi() 
    this.setState({
      news:news
      //max_length:this.news.length
       //모던 자바스크립트 :  news
    })
    this.setState({
      max_length:this.state.news.length
      //max_length:this.news.length
       //모던 자바스크립트 :  news
    })
  }
  
  _callapi = () =>{
    return fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
    .then(potato => potato.json())//데이터를 상황에 맞게 편집 할 수 있음
    .then(json => json.Data)
    .catch(error => console.log(error))
  }

  _morenews = () =>{
    //console.log(this.state.news_length,this.state.max_length)
    if(this.state.news_length < this.state.max_length){
      this.setState({
        news_length: this.state.news_length + 5
      });
    }else{
      alert("더이상 리스트가 없습니다.")
    }
  }

  render() {
    //console.log(this.state)
    return (
      <article className="box__news">
          <div className="h_area"><h2>Recent News <span><span></span>17:11</span></h2><button type="button">EN &gt; KR</button></div>
          <ul>
            {this.state.news ? this._renderNews() : "loading"}
          </ul>
          <button type="button" onClick={this._morenews} className="btn_type">More (<Button_view_number number={this.state.news_length} />/<Button_all_number number={this.state.max_length} />) </button>
      </article>
    );
  }
}

// function News_content({title,content,image,link}){
//   return(
//     <li>
//       <a href={link} target="blank" >
//         <div className="bx2">
//           <img src={image} alt={title} />
//         </div>
//         <dl>
//           <dt><News_time number={"시간 넣어야함 "} />{title}</dt>
//           <dd><p>{content}</p></dd>
//         </dl>
//       </a>
//     </li>
//   )
// }

const News_content =({title,content,image,link}) =>{
  return(
    <li>
      <a href={link} target="blank" >
        <div className="bx2">
          <img src={image} alt={title} />
        </div>
        <dl>
          <dt><News_time number={"시간 넣어야함 "} />{title}</dt>
          <dd><p>{content}</p></dd>
        </dl>
      </a>
    </li>
  )
}

const News_time = ({ number }) => {
  return(
    <time>{number}</time>
  )
}


const Button_view_number = ({ number }) => {
  return(
    <time>{number}</time>
  )
}

const Button_all_number = ({ number }) => {
  return(
    <time>{number}</time>
  )
}


export default News;
