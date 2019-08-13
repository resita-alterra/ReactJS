import React from "react";

export class List extends React.Component {
  render() {
    let listNews = this.props.isi;
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
