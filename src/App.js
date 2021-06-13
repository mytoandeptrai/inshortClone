import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import NavInShorts from "./components/NavInShorts";
import NewContent from "./components/NewContents";
import apiKey from "./config";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newResults, setNewResults] = useState();
  const [loadMore, setLoadMore] = useState(20);
  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadMore}`
      );
      setNewsArray(news.data.articles);
      setNewResults(news.data.totalResults);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    newsApi();
  }, [newResults, category, loadMore]);
  console.log(newsArray);
  return (
    <div className="App">
      <NavInShorts setCategory={setCategory} />

      <NewContent
        loadMore={loadMore}
        newsArray={newsArray}
        newResults={newResults}
        setLoadMore={setLoadMore}
      />
      <Footer />
    </div>
  );
}

export default App;
