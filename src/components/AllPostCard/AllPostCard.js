import React, { Fragment } from 'react';
import './AllPostCard.scss';
import { Link } from 'react-router-dom';

const AllPostCard = ({ post }) => {
  return (
    <Fragment>
      <Link to={{
        pathname: `/posts/${post.id}`,
        state: { post: post }
      }}>
        <div className="all-post-card">
          <img className="post-card-image" alt={post.title} src={`/assets/${post.imageName}`} />
          <div className="post-card-contents">
            <div>
              <h4>{post.description}</h4>
              <p>{post.featureDescription}</p>
            </div>
            <div>
              <h5>by Andy Hunt</h5>
              <h6>IN {post.type} - {post.date}</h6>
            </div>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default AllPostCard;