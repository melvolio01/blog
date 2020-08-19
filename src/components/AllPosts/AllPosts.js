import React, { useState, useEffect } from 'react';
import './AllPosts.scss';
import AllPostCard from '../AllPostCard/AllPostCard';

const AllPosts = ({ posts }) => {
  const [selected, setSelected] = useState(posts)
  const [activeId, setActiveId] = useState(0)
  const [books, setBooks] = useState([]);
  const [movies, setMovies] = useState([]);
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const bookArr = posts.filter(post => post.type === "BOOKS")
    setBooks(bookArr);
    const movieArr = posts.filter(post => post.type === "MOVIES")
    setMovies(movieArr);
    const sportsArr = posts.filter(post => post.type === "SPORTS")
    setSports(sportsArr);
  }, [posts])

  const options = [posts, books, movies, sports];
  const optionStrings = ['All', 'Books', 'Movies', 'Sports'];

  return (
    <div>
      <span className="total"><h5>
        {selected.length}</h5>
        <p>RESULTS FOR {`${optionStrings[activeId].toUpperCase()}`}</p>
        </span>
      <div className="all-posts-container">
        <div className="all-posts">
          {selected.map((post) => {
            return <AllPostCard key={post.id} post={post} />
          })}
          {selected.length === 0 && 
          <p className="no-posts">No posts for {optionStrings[activeId].toLowerCase()} yet</p>}
        </div>
        <div className="all-posts-filters">
          <h4>Filters</h4>
          <ul>
            {options.map((option, index) => {
              return <li
                id={index}
                className={`option-li ${(index === activeId) ? 'active' : ''}`}
                onClick={() => {
                  setSelected(option)
                  setActiveId(index)
                }
                }> {`${optionStrings[index]}: (${option.length})`}
              </li>
            })}
          </ul>
        </div>
      </div>
    </div >
  );
};

export default AllPosts;