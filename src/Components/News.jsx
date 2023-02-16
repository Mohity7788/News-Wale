import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=17627e3ab39a43e9b045089e927af01f&pageSize=12";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          articles: data.articles,
          totalArticles: data.totalResults,
        });
      });
  }
  handlePrevious = () => {
    console.log("previous button clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=17627e3ab39a43e9b045089e927af01f&pageSize=12&page=${
      this.state.page - 1
    }`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ articles: data.articles, page: this.state.page - 1 });
      });
  };
  handleNext = () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalArticles / 20)) {
    } else {
      console.log("next button clicked");
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=17627e3ab39a43e9b045089e927af01f&pageSize=12&page=${
        this.state.page + 1
      }`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ articles: data.articles, page: this.state.page + 1 });
        });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2>News Wale - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((ele) => {
            return (
              <div className="col-md-4" key={ele.url}>
                <NewsItem
                  title={ele.title}
                  description={ele.description}
                  imageUrl={
                    ele.urlToImage
                      ? ele.urlToImage
                      : "https://www.rozgar.com/static/media/courseSummary.d98ada59dc956b02ebf5.jpg"
                  }
                  newsUrl={ele.url}
                />
              </div>
            );
          })}
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              class="btn btn-dark"
              onClick={this.handlePrevious}
            >
              Previous Page
            </button>
            <button
              type="button"
              class="btn btn-dark"
              onClick={this.handleNext}
            >
              Next page
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default News;
