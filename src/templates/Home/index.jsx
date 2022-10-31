import { Component } from "react";

import "./style.css";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Button/index";

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 3,
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postPerPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    console.log("Load more Posts");
  };

  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <Posts posts={posts} />
        <Button text="Load more posts" onClick={this.loadMorePosts} />
      </section>
    );
  }
}

export default Home;
