import React, { Fragment } from 'react';
import SmallPost from '../SmallPost/SmallPost';
import './PostsList.scss';
import { Link } from 'react-router-dom';

const PostsList = ({ posts }) => {
  const recentPosts = posts.slice(0, 5);
  return (
    <div className="other-posts">
      <h4>Recent Posts</h4>
      <p className="author">by Andy Hunt</p>
      {recentPosts.map((post, index) => {
        return (<Fragment key={index}>
          <Link to={{
            pathname: `/posts/${post.id}`,
            state: { post: post }
          }}>
            <SmallPost post={post} />
          </Link>
        </Fragment>)
      })
      }
      <Link to="/all"><button className="all-posts-btn" >All Posts</button></Link>
    </div>
  );
};

export default PostsList;