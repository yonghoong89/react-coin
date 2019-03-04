import React, { Component } from 'react';
import LoadingOverlay from 'react-loading-overlay'
import { ToastContainer, toast } from 'react-toastify'; //팝업
import 'react-toastify/dist/ReactToastify.css'; //팝업

class News extends Component {
  state = {
    language : "KR > EN",
    max_length : null,
    news_length : 5
  }

  componentDidMount(){ //데이터 get
    this._getNews()
  }

  componentDidUpdate(prevProps) {
    //console.log(prevProps)
  }
  
  _renderNews = () =>{
    const number = this.state.news_length //시작점
    const news = this.state.news.slice(0,number).map((news,index)=>{
      return <News_content image={news.source_info.img} link={news.guid} title={news.title} content={news.body} key={index} />
    });
  
    return news
  }
  
  _getNews = async () =>{
    const news = await this._callapi() 
    this.setState({
      news:news
    })
    this.setState({
      max_length:this.state.news.length
    })
  }

  popup = () =>{
    toast("Load +5 News");
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
      this.popup()
    }else{
      alert("더이상 리스트가 없습니다.")
    }
  }

  language_change = () =>{
    if(this.state.language == "KR > EN"){
      this.setState({
        language:"EN > KR"
      })
      console.log("한국어로 변경")
    }else{
      this.setState({
        language:"KR > EN"
      })
      console.log("영어로 변경")
    }
  }

  render() {
    //console.log(this.state)
    return (
      <article className="box__news">
          <div className="h_area">
            <h2>Recent News 
              <span>
                <span></span><Update_time />
              </span>
            </h2>
            <Language language={this.state.language} language_change={this.language_change} />
          </div>
          <ul>
            {this.state.news ? this._renderNews() : <Loading />}
          </ul>
          <button type="button" onClick={this._morenews} className="btn_type">More (<Button_view_number number={this.state.news_length} />/<Button_all_number number={this.state.max_length} />) </button>
          <ToastContainer/>
      </article>
    );
  }
}
const News_content =({title,content,image,link}) =>{
  return(
    <li>
      <a href={link} target="blank" >
        <div className="bx2">
          <img src={image} alt={title} />
        </div>
        <dl>
          <dt><News_time number={"times... "} />{title}</dt>
          <dd><p>{content}</p></dd>
        </dl>
      </a>
    </li>
  )
}

const Language = ({ language,language_change }) => {
  return(
    <button type="button" onClick={language_change}>{language}</button>
  )
}

const Loading = () => {
  //console.log(active)
  return (
    <LoadingOverlay active={true} spinner text="Loading..." />
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

const Update_time = ({  }) => {
  return(
    <time>00:00</time>
  )
}


export default News;
