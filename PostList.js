import React, { Component } from "react";
import axios from "axios";
import "./postlist.css";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="grid">
        List of Posts
        {posts.length
          ? posts.map((post) => (
              <div className="gridText" key={post.id}>
                {post.title}
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default PostList;
