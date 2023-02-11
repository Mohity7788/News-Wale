import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "TMZ",
      },
      author: "TMZ Staff",
      title:
        "American Airlines Jet Collides With Shuttle Bus At LAX, 5 Injured - TMZ",
      description:
        "Investigators are probing a third commercial plane mishap within a month ... the latest was Friday night at LAX ... and multiple people were hurt.",
      url: "https://www.tmz.com/2023/02/11/american-airlines-crash-collide-injure-lax-jfk-delta-airport-mishaps/",
      urlToImage:
        "https://imagez.tmz.com/image/bd/16by9/2023/02/11/bdd078c2592a4565b85b1e84b8ee791e_xl.jpg",
      publishedAt: "2023-02-11T15:13:00Z",
      content:
        "Investigators are probing a third commercial plane mishap within a month ... the latest was Friday night at LAX ... and multiple people were hurt.\r\nAn American Airlines commercial plane collided with… [+1498 chars]",
    },
    {
      source: {
        id: null,
        name: "Slate Magazine",
      },
      author: "Nitish Pahwa",
      title:
        "Super Bowl crypto ads: how much you've lost if you listened to Larry David or Matt Damon last year. - Slate",
      description:
        "Tallying the losses after last year’s Super Bowl crypto-advertising bonanza.",
      url: "https://slate.com/technology/2023/02/super-bowl-ads-crypto-ftx-larry-david-coinbase-matt-damon.html",
      urlToImage:
        "https://compote.slate.com/images/af6be5a7-ccaa-419e-ac25-23651d2f1691.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1560",
      publishedAt: "2023-02-11T14:26:00Z",
      content:
        "Happy Super Bowl weekend! Remember last years game? More importantly, remember all the cryptocurrency ads? I bet you do, and I bet youre wondering whether youll be deluged with them again. Worry not:… [+18525 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Kerry Hannon",
      title:
        "Retirees may face this hassle with Medicare Advantage, survey finds - Yahoo Finance",
      description:
        "Seniors who opted for private Medicare insurance plans should not be shy about pushing back on denials for pre-authorizations.",
      url: "https://finance.yahoo.com/news/retirees-may-face-this-hassle-with-medicare-advantage-survey-finds-140959662.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/ORH4LRa8o65gHVC2Zu6h9Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NDE-/https://s.yimg.com/os/creatr-uploaded-images/2023-02/0f73dd00-aa15-11ed-b7dd-575a6ffde6b9",
      publishedAt: "2023-02-11T14:09:59Z",
      content:
        "Seniors who opted for private Medicare insurance plans should not be shy about pushing back on denials for pre-authorizations, according to a new study.\r\nOf the 35 million requests by Medicare Advant… [+7572 chars]",
    },
    {
      source: {
        id: "financial-times",
        name: "Financial Times",
      },
      author: "George Steer",
      title:
        "Artificial intelligence stocks soar on ChatGPT hype - Financial Times",
      description:
        "Analysts warn of ‘speculative’ bubble as some shares more than double in value this year",
      url: "https://www.ft.com/content/e341458e-ec12-43bb-835c-26392678ded0",
      urlToImage:
        "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F2f3705df-b6f8-493b-9b8a-888b0cd746a9.jpg?source=next-opengraph&fit=scale-down&width=900",
      publishedAt: "2023-02-11T14:00:40Z",
      content:
        "Shares in small artificial intelligence groups have soared this year on the back of the hype surrounding ChatGPT and other generative AI models, leading analysts to warn of a speculative bubble in th… [+2727 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=17627e3ab39a43e9b045089e927af01f";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });
  }

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
                  imageUrl={ele.urlToImage}
                  newsUrl={ele.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default News;
