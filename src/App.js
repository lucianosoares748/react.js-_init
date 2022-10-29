import { Component } from 'react';
import './App.css';
import { PostCard } from './components/PostCard';

class App extends Component {
  state = {
    posts: []
  };


  componentDidMount() {
    this.loadPosts();
  }
  
  
  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')
    
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
    
    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotosJson = postsJson.map((post, index) => {
      return {...post, cover: photosJson[index].url }
    }
    );

    this.setState({ posts: postsAndPhotosJson});
  }
  
  
  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <div className="posts">
          {posts.map(post => (
            <PostCard 
              key={post.id}
              title={post.title}
              body={post.body}
              cover={post.cover}
              id={post.id}
            />
          ))}
        </div>
      </section>
    )
  }
}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
