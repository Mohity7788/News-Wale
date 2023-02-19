import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;

    return (
      <div className="my-3 ">
        <div className="card mb-3" style={{ width: "20rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body text-centre">
            <h5 className="card-title text-center">{title}</h5>
            <p className="card-text text-centre">{description}</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark "
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
