import React, { Component } from 'react';
import BlogPost from './components/BlogPost'
import Header from './components/Header'
import './App.css';

class App extends Component {
  
  state = {
    posts: [
      { content: "Sleeping under the covers is the best.", img: "https://cdn2.thecatapi.com/images/lj.jpg" },
      { content: "This looked so easy to climb at first.", img: "https://cdn2.thecatapi.com/images/9r7.jpg" },
      { content: "Nobody else can touch my baby", img: "https://cdn2.thecatapi.com/images/ach.jpg" },
    ]
  }
  
  render() {
    return (
      <div id="app">
        <Header />
        <div id="seperator"></div>
        <BlogPost post={this.state.posts[0]} />
        <BlogPost post={this.state.posts[1]} />
        <BlogPost post={this.state.posts[2]} />
      </div>
    )
  }
}