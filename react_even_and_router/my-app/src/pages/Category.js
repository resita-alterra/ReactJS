import React from "react";
import { List } from "./../components/List";
import "./../styles/article.css";
import { Headline } from "./../components/Headline";
import { Header } from "./../components/Header";
import { Footer } from "./../components/Footer";
import axios from "axios";
import ReactDOM from "react-dom";

const apiKey = "f7edca641e214ec9a5e7894b2a90c80c";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?country=us&apiKey=" + apiKey;
// const urlList = baseUrl + "everything?domains=nytimes.com&apiKey=" + apiKey;

export class Category extends React.Component {
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
      .get(
        baseUrl +
          "sources?category=" +
          this.props.match.params.category +
          "&apiKey=" +
          apiKey
      )
      .then(function(response) {
        let teratur = response.data.sources.map((item, key) => {
          return {
            url: item.url,
            title: item.name,
            publishedAt: "2019",
            content: item.description
          };
        });
        self.setState({ news: teratur });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.match.params.category !== this.props.match.params.category) {
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
        .get(
          baseUrl +
            "sources?category=" +
            this.props.match.params.category +
            "&apiKey=" +
            apiKey
        )
        .then(function(response) {
          let teratur = response.data.sources.map((item, key) => {
            return {
              url: item.url,
              title: item.name,
              publishedAt: "2019",
              content: item.description
            };
          });
          self.setState({ news: teratur });
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

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

  // componentDidUpdate = prevProps => {
  //   if (prevProps.value !== this.props.value) {
  //     axios
  //       .get(
  //         "https://newsapi.org/v2/everything?q=" +
  //           this.props.value +
  //           "&from=2019-07-13&sortBy=publishedAt&apiKey=3b2f07d9271042bdae12b91298a27218"
  //       )
  //       .then(response => {
  //         this.setState({ value: response.data.articles });
  //         console.log(response);
  //         // console.log(this.state.data);
  //       })
  //       .catch(error => {
  //         console.log("terdapat eror ini :", error);
  //       });
  //   }
  // };

  render() {
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
