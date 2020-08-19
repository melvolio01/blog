import React from 'react';
import { useParams, useLocation, Redirect } from 'react-router-dom';
import './SelectedPost.scss';
import { posts } from '../../data';
const sanitizeHtml = require('sanitize-html');

const SelectedPost = () => {
  const location = useLocation();
  const params = useParams();
  const chosenPost = posts.filter(post => post.id === params.id)
  if ((location.state === undefined) && chosenPost.length === 0) return <Redirect to="/" />
  const post = location.state !== undefined ? location.state.post : chosenPost[0];
  const { meta } = post;
  const clean = sanitizeHtml(post.body);
  const createMarkup = () => {
    return { __html: clean };
  }

  return (
      <div className="recent-posts">
        <div className="selected-post-div">
          <h1>{post.description}</h1>
          <div className="info">
            <h3>By Andy Hunt</h3>
            <h4>{post.type} / {post.date}</h4>
          </div>
          <img className="selected-image" 
          src={`/assets/${post.imageName}`} 
          alt={post.title} />
          <div className="post-body" dangerouslySetInnerHTML={createMarkup()}>
          </div>
        </div>
        <div className="meta-data">
          <h4>{post.title}</h4>
          {meta && Object.keys(meta).map((key, index) => {
            return <p key={index} value={key}>{key}: {meta[key]}</p>
          })}
        </div>
      </div>
  );
};

export default SelectedPost;