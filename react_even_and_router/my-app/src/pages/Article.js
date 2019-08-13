import React from "react";
import { List } from "./../components/List";
import "./../styles/article.css";
import { Headline } from "./../components/Headline";
import { Header } from "./../components/Header";
import { Footer } from "./../components/Footer";
import axios from "axios";
import { Redirect } from "react-router-dom";

const apiKey = "f7edca641e214ec9a5e7894b2a90c80c";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?country=us&apiKey=" + apiKey;
const urlList = baseUrl + "everything?domains=nytimes.com&apiKey=" + apiKey;

export class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: [], headline: [], keyword: "" };
    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidMount() {
    const self = this;
    axios
      .get(urlHeadline)
      .then(function(response) {
        self.setState({ headline: response.data.articles });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
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

  changeHandler(e) {
    let self = this;
    e.preventDefault();
    self.setState({ keyword: e.target.value }, () => {
      axios
        .get(
          baseUrl +
            "everything?qInTitle=" +
            self.state.keyword +
            "&apiKey=" +
            apiKey
        )
        .then(function(response) {
          self.setState({ news: response.data.articles });
          console.log(keyword);
        })
        .catch(function(error) {
          console.log(error);
        });
    });
    let keyword = self.state.keyword;
  }

  render() {
    const is_login = JSON.parse(sessionStorage.getItem("is_login"));
    if (is_login === null) {
      return <Redirect to={{ pathname: "/" }} />;
    } else {
      return (
        <div>
          <Header
            keyword={this.state.keyword}
            changeHandler={this.changeHandler}
          />
          <div className="container">
            <div className="row">
              <div className="col-md-4 scrollbar_list" style={{ padding: 10 }}>
                <div className="row">
                  <div className="col-md-6">
                    <span style={{ fontWeight: "700", fontSize: 18 }}>
                      Berita terkini
                    </span>
                  </div>
                  <div className="col-md-6">
                    <p
                      style={{
                        color: "#f47522",
                        fontSize: 12,
                        textAlign: "right"
                      }}
                    >
                      Lihat semua
                    </p>
                  </div>
                </div>
                <List isi={this.state.headline} />
              </div>
              <div
                className="col-md-8 align-items-center"
                style={{ backgroundColor: "white" }}
              >
                <Headline isi={this.state.news} />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }
}
