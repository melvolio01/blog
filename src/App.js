import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import AllPosts from './components/AllPosts/AllPosts';
import SelectedPost from './components/SelectedPost/SelectedPost';
import { posts } from './data';
import './App.css';

const App = () => {
  return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home posts={posts} />
          </Route>
          <Route path="/all">
            <AllPosts posts={posts} />
          </Route>
          <Route path="/posts/:id" exact>
            <SelectedPost posts={posts} />
          </Route>
          <Route path="*">
            <div className="text-center">
              <h1 >404</h1>
              <h2 >Oops, page not found</h2>
            </div>
          </Route>
        </Switch>
      </div>
  );
};

export default App;



