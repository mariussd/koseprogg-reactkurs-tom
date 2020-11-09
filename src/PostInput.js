import React from "react";
import Button from "./Button";
import { imageLinks } from "./imageLinks";
import "./styles.css";

const PostInput = (props) => {
  const [text, setText] = React.useState("");
  const [title, setTitle] = React.useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = () => {
    if (title === "" || text === "") {
      alert(
        "Vennligst fyll ut både tittel og tekst før du legger til et innlegg."
      );
      return;
    }

    props.addPost(
      title,
      text,
      new Date().toLocaleString(),
      imageLinks[Math.floor(Math.random() * imageLinks.length)]
    );
    setTitle("");
    setText("");
  };

  return (
    <div className="PostInput">
      <h2>Nytt innlegg</h2>
      <textarea
        placeholder="Tittel"
        rows={1}
        cols={70}
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        placeholder="Tekst"
        rows={8}
        cols={70}
        value={text}
        onChange={handleTextChange}
      />
      <Button title={"Legg til post"} onClick={handleSubmit} />
    </div>
  );
};

export default PostInput;
