import React from "react";
import "./style.css";
import moment from "moment";
const NewsCard = ({ newsItem }) => {
  const date = moment(newsItem.publishedAt).format("HH:mm:ss MMM DD, YYYY");
  return (
    <div className="newsCard">
      <img
        src={
          newsItem.urlToImage
            ? newsItem.urlToImage
            : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"
        }
        alt={newsItem.title}
        className="newsImage"
      />
      <div className="newsText">
        <div>
          <span className="title">{newsItem.title}</span>
          <br />
          <span className="author">
            <a href={newsItem.url} target="__blank">
              <b>short </b>
            </a>
            <span className="muted">
              by {newsItem.author ? newsItem.author : "unknown"} / {date}
            </span>
          </span>
        </div>
        <div className="lowerNewsText">
          <div className="description">{newsItem.description}</div>
          <span className="readmore">
            Read more at{" "}
            <a href={newsItem.url} target="__blank">
              <b>{newsItem.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
