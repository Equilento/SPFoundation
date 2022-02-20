import React from 'react';
import './program.css';

const Program = ({ imgUrl, title, text }) => (
  <div className="container">
    <div className="card">
      <div className="card__header">
        <img
          src={imgUrl}
          alt="card__image"
          className="card__image"
          width="600"
        />
      </div>
      <div className="card__body">
        <span className="tag tag-blue">Technology</span>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className="card__footer">
        <div className="user">
          <img src={imgUrl} alt="user__image" className="user__image" />
          <div className="user__info">
            <h5>Jane Doe</h5>
            <small>2h ago</small>
          </div>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card__header">
        <img
          src={imgUrl}
          alt="card__image"
          className="card__image"
          width="600"
        />
      </div>
      <div className="card__body">
        <span className="tag tag-brown">Food</span>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className="card__footer">
        <div className="user">
          <img src={imgUrl} alt="user__image" className="user__image" />
          <div className="user__info">
            <h5>Jony Doe</h5>
            <small>Yesterday</small>
          </div>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card__header">
        <img
          src={imgUrl}
          alt="card__image"
          className="card__image"
          width="600"
        />
      </div>
      <div className="card__body">
        <span className="tag tag-red">Automobile</span>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className="card__footer">
        <div className="user">
          <img src={imgUrl} alt="user__image" className="user__image" />
          <div className="user__info">
            <h5>John Doe</h5>
            <small>2d ago</small>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Program;
