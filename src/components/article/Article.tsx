import React from 'react';
import './article.css';

const Article = ({ imgUrl, title, text }) => (
  <div className="spf__program-container_article">
    <div className="spf__program-container_article-image">
      <img src={imgUrl} alt="program_image" />
    </div>
    <div className="spf__program-container_article-content">
      <div>
        <h1 className="gradient__text">{title}</h1>
        <h3>{text}</h3>
      </div>
    </div>
  </div>
);

export default Article;
