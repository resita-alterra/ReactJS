import React from "react";
import { List } from "./../components/List";
import "./../styles/article.css";
import { Headline } from "./../components/Headline";
import { Header } from "./../components/Header";
import { Footer } from "./../components/Footer";

export function Article() {
  return (
    <div>
      <Header />
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
                  style={{ color: "#f47522", fontSize: 12, textAlign: "right" }}
                >
                  Lihat semua
                </p>
              </div>
            </div>
            <List />
          </div>
          <div
            className="col-md-8 align-items-center"
            style={{ backgroundColor: "white" }}
          >
            <Headline />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
