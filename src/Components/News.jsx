import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

class News extends Component {
  // To make First letter capital
  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };

    // to make title dynamic
    document.title = `${this.capitalize(this.props.category)} | News Wale`;
  }

  // Calling the main nes API Data
  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${process.env.REACT_APP_BASE_URL}&pageSize=12`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          articles: data.articles,
          totalResults: data.totalResults,
          loading: false,
        });
      });
    console.log(this.props.apiKey);
  }

  fetchMoreData = () => {
    this.setState({ page: this.state.page + 1 });
    setTimeout(() => {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&page=${this.state.page}&apiKey=17627e3ab39a43e9b045089e927af01f&pageSize=12`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          this.setState({
            articles: this.state.articles.concat(data.articles),
            totalResults: data.totalResults,
            loading: false,
          });
        });
    }, 1000);
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">
          News Wale - Top {this.capitalize(this.props.category)} Headlines
        </h2>
        {/* {this.state.loading && <Spinner />} */}
        {/* {this.state.loading ? <Spinner /> : ""} */}
        {/* my logic for linking loading state to spinner component */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
          key={this.state.articles.url}
        >
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
                    author={ele.author ? ele.author : "Unknown"}
                    date={ele.publishedAt ? ele.publishedAt : "Unknown"}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
export default News;
