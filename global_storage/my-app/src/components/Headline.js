import React from "react";

export class Headline extends React.Component {
  render() {
    const newsItem = this.props.isi;
    // let newsItem1 = newsItem.slice(1, 2);
    // saya maunya berita kedua, jadi di slice, diambil index pertama aja
    return (
      <div>
        {newsItem.map(elm => {
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
