import React from "react";
import PostArticle from "../components/Posts";
import { Pagination } from "../components/Pagination";

export const Home = ({ post, postPerPage, totalPosts, handlePage }) => {
  return (
    <>
      {post.map((data, index) => {
        return <PostArticle key={index} {...data} />;
      })}

      <Pagination
        totalPosts={totalPosts}
        postPerPage={postPerPage}
        handlePage={handlePage}
      />
    </>
  );
};
