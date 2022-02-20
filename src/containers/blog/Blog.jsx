import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="spf__blog section__padding" id="blog">
    <div className="spf__blog-heading">
      <h1 className="gradient__text">Our Program</h1>
    </div>
    <div className="spf__blog-container">
      {/* <div className="spf__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div> */}
      <div className="spf__blog-container_groupB">
        <Article imgUrl={blog01} title="Intellectual Capital Development" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Article imgUrl={blog02} title="Venture Philantrophy" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Article imgUrl={blog03} title="Community Development" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      </div>
    </div>
  </div>
);

export default Blog;
