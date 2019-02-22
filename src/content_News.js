import React, { Component } from 'react';

class News extends Component {
  state = {}

  componentDidMount(){ //데이터 get
    this._getNews()
  }
  
  _renderNews = () =>{
    const news = this.state.news.map((news)=>{
      return <News_content image={news.source_info.img} link={news.guid} title={news.title} content={news.body} />
    });
    return news
  }
  
    _getNews = async () =>{
      const news = await this._callapi() 
      //console.log(news)
      this.setState({
        news:news //모던 자바스크립트 :  news
      })
    }
  
    _callapi = () =>{
      return fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
      .then(potato => potato.json())//데이터를 상황에 맞게 편집 할 수 있음
      .then(json => json.Data)
      .catch(error => console.log(error))
    }

  render() {
    //const {news} = this.state; 
    //console.log(this._renderNews())
    return (
      <article className="box__news">
          <div className="h_area"><h2>Recent News <span><span></span>17:11</span></h2><button type="button">EN &gt; KR</button></div>
          <ul>
            {this.state.news ? this._renderNews() : "loading"}
          </ul>
          <button type="button" class="btn_type">More (5/50) </button>
      </article>
    );
  }
}

function News_content({title,content,image,link}){
  return(
    <li>
      <a href={link}>
        <div className="bx2">
          <img src={image} alt={title} />
        </div>
        <dl>
          <dt><News_time />{title}</dt>
          <dd><p>{content}</p></dd>
        </dl>
      </a>
    </li>
  )
}

function News_time(){
  return(
    <time></time>
  )
}

export default News;
