import React from "react";
import Header from "./Header";
import Post from "./Post";
import PostInput from "./PostInput";
import "./styles.css";

export default function App() {
  const [posts, setPosts] = React.useState([]);

  const placeholderComponent = (
    <div className="placeholderComponent">
      <p>Finner ingen innlegg.</p>
    </div>
  );

  const addPost = (title, text, date, image) => {
    const newPost = { title: title, text: text, date: date, image: image };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="App">
      <Header />
      <div className="posts">
        {posts.length === 0
          ? placeholderComponent
          : posts.map((post, i) => {
              return (
                <Post
                  key={i}
                  title={post.title}
                  text={post.text}
                  date={post.date}
                  image={post.image}
                />
              );
            })}
      </div>
      <PostInput addPost={addPost} />
    </div>
  );
}
