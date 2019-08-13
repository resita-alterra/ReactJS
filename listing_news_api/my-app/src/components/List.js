import React from "react";
import axios from "axios";

const apiKey = "fa1283cfda8e488c98801d4f17560869";
const baseUrl = "https://newsapi.org/v2/";
const urlList = baseUrl + "everything?domains=nytimes.com&apiKey=" + apiKey;

export class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: [] };
  }

  componentWillMount() {
    const self = this;
    axios
      .get(urlList)
      .then(function(response) {
        self.setState({ news: response.data.articles });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    let listNews = this.state.news;
    let ini = listNews.map((elm, key) => {
      return (
        <li className="list-group-item">
          <div className="one_list">
            <a href={elm.url} target="_blank">
              <p
                style={{
                  backgroundColor: "red",
                  width: 30,
                  borderRadius: 4,
                  textAlign: "center"
                }}
                className="list"
              >
                #{key + 1}
              </p>
            </a>
            <a href={elm.url} target="_blank">
              <p className="list" style={{ fontWeight: "700" }}>
                {elm.title}
              </p>
            </a>
            <p className="list" style={{ fontSize: 10, color: "grey" }}>
              {elm.source.name}
            </p>
          </div>
        </li>
      );
    });
    return <ul className="list-group">{ini}</ul>;
  }
}
