import "./App.css";
import NavBar from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { useEffect } from "react";
import { useState } from "react";
import { parse } from "rss-to-json";

const url = "https://rss.walla.co.il/feed/22";

function App() {
  const [post, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const getJSON = async () => {
    try {
      const res = await parse(url);
      const data = JSON.stringify(res, null, 3); // convert object to string
      const convert_Data_To_Object = JSON.parse(data); // convert string to object
      setPosts(convert_Data_To_Object);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getJSON();
  }, [loading, currentPage]);

  if (!post.items) return; // guard clauses
  const indexOfLast = currentPage * postPerPage;
  const indexOfStart = indexOfLast - postPerPage;
  const currentPosts = post.items.slice(indexOfStart, indexOfLast);

  const handlePage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        {loading ? (
          <h2 className="text-white text-center">Loading...</h2>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  post={currentPosts}
                  postPerPage={postPerPage}
                  totalPosts={post.items.length}
                  handlePage={handlePage}
                />
              }
            />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
