import React from "react";

const Post = ({ title, description, link, published, enclosures }) => {
  const date = new Date(published);
  const dateFormat = Intl.DateTimeFormat(navigator.language, {
    year: "numeric", // YYYY
    month: "2-digit", // 2 strings - MM
    day: "2-digit", // 2 strings - DD
    // if we dont use that i get just 1 string in month Example - dd-m-yyyy
    // but we need like that dd-mm-yyyy
  }).format(date);

  return (
    <article>
      <div className="img-article">
        <img src={enclosures[0].url} alt="logo" />
        <div className="title-article">{title}</div>
      </div>

      <div className="TimeZone">תאריך : {dateFormat}</div>

      <p>{description.replace(/<[^>]*>?/gm, "")}</p>
      <a href={link}>לכתבה המלאה</a>
    </article>
  );
};
export default Post;
