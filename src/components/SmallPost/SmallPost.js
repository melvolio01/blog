import React from 'react';
import './SmallPost.scss';

const SmallPost = ({ post }) => {
  return (
    <div className="post" >
      <img className="small-image" alt={post.imageName} src={`/assets/${post.imageName}`} />
      <div className="post-contents">
        <h5>{post.date}</h5>
        <p>{post.description}</p>
      </div>
    </div>
  );
};

export default SmallPost;