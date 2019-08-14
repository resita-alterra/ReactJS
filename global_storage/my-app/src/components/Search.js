import React from "react";

export class Search extends React.Component {
  render() {
    return (
      <div className="col-md-5 align-items-center">
        <img
          src="https://cdn2.iconfinder.com/data/icons/material-line-thin/1024/search-512.png"
          style={{ height: 35, width: 35, display: "inline" }}
        />
        <form style={{ display: "inline" }}>
          <input onChange={this.props.onChange} />
        </form>
        <p>Isi : {this.props.keyword}</p>
      </div>
    );
  }
}
