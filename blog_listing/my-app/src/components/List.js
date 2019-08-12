import React from "react";

export class List extends React.Component {
  render() {
    let ini = [];
    for (let i = 0; i < 10; i++) {
      ini.push(
        <li>
          <div className="one_list">
            <p
              style={{
                backgroundColor: "red",
                width: 30,
                borderRadius: 4,
                textAlign: "center"
              }}
              className="list"
            >
              #{i + 1}
            </p>
            <p className="list" style={{ fontWeight: "700" }}>
              judul ke-{i + 1}
            </p>
            <p className="list" style={{ fontSize: 10, color: "grey" }}>
              Publisher ke-{i + 1}
            </p>
          </div>
        </li>
      );
    }
    return <ul>{ini}</ul>;
  }
}
