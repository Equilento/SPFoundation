import React from "react";
import Article from "../../components/article/Article";
import { program01, program02, program03 } from "./imports";
import "./program.css";

const Program = () => (
  <div className="spf__program section__padding" id="program">
    <div className="spf__program-heading">
      <h1 className="gradient__text">Our Program</h1>
    </div>
    <div className="spf__program-container">
      {/* <div className="spf__program-container_groupA">
        <Article imgUrl={program01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div> */}
      <div className="spf__program-container_groupB">
        <Article
          imgUrl={program01}
          title="Intellectual Capital Development"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Article
          imgUrl={program02}
          title="Venture Philantrophy"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Article
          imgUrl={program03}
          title="Community Development"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  </div>
);

export default Program;
