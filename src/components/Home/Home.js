import React, { Fragment } from 'react';
import HomePost from '../HomePost/HomePost';
import PostsList from '../PostsList/PostsList';
import './Home.scss';

const Home = ({ posts }) => {
  return (
    <Fragment>
      <div className="recent-posts">
        <HomePost posts={posts} />
        <PostsList posts={posts} />
      </div>
    </Fragment >
  )
};

export default Home;