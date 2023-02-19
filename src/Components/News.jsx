import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=17627e3ab39a43e9b045089e927af01f&pageSize=12`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          articles: data.articles,
          totalArticles: data.totalResults,
          loading: false,
        });
      });
  }
  handlePrevious = () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=17627e3ab39a43e9b045089e927af01f&pageSize=12&page=${
      this.state.page - 1
    }`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          articles: data.articles,
          loading: false,
          page: this.state.page - 1,
        });
      });
  };
  handleNext = () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=17627e3ab39a43e9b045089e927af01f&pageSize=12&page=${
      this.state.page + 1
    }`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          articles: data.articles,
          loading: false,
          page: this.state.page + 1,
        });
      });
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">News Wale - Top Headlines</h2>
        {this.state.loading && <Spinner />}
        {/* {this.state.loading ? <Spinner /> : ""} */}
        {/* my logic for linking loading state to spinner component */}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((ele) => {
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
                    author={ele.author ? ele.author : "Unknown"}
                    date={ele.publishedAt ? ele.publishedAt : "Unknown"}
                  />
                </div>
              );
            })}
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark btn-previous"
              onClick={this.handlePrevious}
            >
              Previous Page
            </button>
            <button
              type="button"
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalArticles / 20)
              }
              className="btn btn-dark btn-next"
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
