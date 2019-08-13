import React from "react";
import axios from "axios";

const apiKey = "fa1283cfda8e488c98801d4f17560869";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?country=us&apiKey=" + apiKey;
export class Headline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: [] };
  }

  componentWillMount() {
    const self = this;
    axios
      .get(urlHeadline)
      .then(function(response) {
        self.setState({ news: response.data.articles });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const newsItem = this.state.news;
    let newsItem1 = newsItem.slice(1, 2);
    // saya maunya berita kedua, jadi di slice, diambil index pertama aja
    return (
      <div>
        {newsItem1.map(elm => {
          return (
            <div>
              <img
                src={elm.urlToImage}
                style={{
                  width: 600,
                  alignSelf: "center",
                  padding: 15
                }}
              />
              <a href={elm.url} target="_blank">
                <h3>{elm.title}</h3>
              </a>
              <p style={{ fontSize: 10, color: "grey" }}>
                Published : {elm.publishedAt}
              </p>
              <p>{elm.content}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
