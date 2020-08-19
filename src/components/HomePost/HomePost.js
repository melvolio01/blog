import React, { Fragment, useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import { updateArr } from '../../helpers/helpers';
import { Link } from 'react-router-dom';

import './HomePosts.scss';

const HomePost = ({ posts }) => {
  const [blogPosts, setPosts] = useState(posts);

  const transitions = useTransition(blogPosts[0], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setPosts(blogPosts => updateArr(blogPosts))
    }, 10000);
    return () => clearInterval(interval);
  }, [])

  return transitions.map(({ item, props, key }) => (
    <Fragment key={key}>
      <Link
        to={{
          pathname: `/posts/${item.id}`,
          state: { post: item }
        }}>
        <animated.div
          key={key}
          style={{ ...props }}
        >
          <div className="featured-post">
            <img className="bg" alt={item.title} src={`/assets/${item.imageName}`} />
            <div className="bg-text"><p>Featured</p><h2>{item.description}</h2></div>
            <div className="additional-info">
            
              <div>
                <h5>by Andy Hunt</h5>
                <h6>{item.type} - {item.genre[0]}</h6>
              </div>
              <p>{item.featureDescription}</p>
            </div>
          </div>
        </animated.div>
      </Link>

    </Fragment >
  ))
}

export default HomePost;