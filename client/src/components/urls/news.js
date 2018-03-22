import React, { Component } from 'react';
import './news.css';

class News extends Component {
  constructor(){
    super();
    this.state = {
      news: []
  }

  }
  componentDidMount(){
    fetch('/getpost')
    //const renderRows = news.data.slice(0, 15).map((news) => { myNews })
    .then( res => res.json() )
    .then( news => this.setState( {news}, () => console.log('News fetched..', news)));
   
  }
  render() {
    return (
      <div className="row news_div">
       { this.state.news.map(news =>
        <ul className="news_mine">
         <li id="first_one">{news.f_id}</li>
			    <li id="third_one">{news.f_Link.slice(8,27)}</li>
            <li id="fourth_one">{news.f_Theme.slice(0,15)}</li>
          </ul>
                )}
        </div>
    );
  }
}

export default News;
