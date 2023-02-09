import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>News Wale - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
        </div>
      </div>
    );
  }
}
export default News;
