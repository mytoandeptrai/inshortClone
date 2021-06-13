import { Container } from "@material-ui/core";
import React from "react";
import NewsCard from "../NewsCard";
import "./style.css";
const NewContent = ({ newResults, newsArray, loadMore, setLoadMore }) => {
  return (
    <>
      <Container maxWidth="md">
        <div className="content">
          <div className="downloadMessage">
            <span className="downloadText">
              For the best experience use inshorts app on your smartphone
            </span>
            <img
              alt="app store"
              height="80%"
              src="https://assets.inshorts.com/website_assets/images/appstore.png"
            />
            <img
              alt="play store"
              height="80%"
              src="https://assets.inshorts.com/website_assets/images/playstore.png"
            />
          </div>
          {newsArray.map((newsItem) => (
            <NewsCard newsItem={newsItem} key={newsItem.title} />
          ))}
          {loadMore <= newResults && (
            <>
              <hr />
              <button
                className="loadMore"
                onClick={() => setLoadMore(loadMore + 20)}
              >
                Loadmore
              </button>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default NewContent;
