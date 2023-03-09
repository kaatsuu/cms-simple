import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [redirect, setRedirect] = useState(false);
  // Data typeを定義
  // const [titleType, setTitleType] = useState("Text");
  // const [summaryType, setSummaryType] = useState("Text");

  async function createNewPost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);

    ev.preventDefault();
    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });

    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form onSubmit={createNewPost}>
      <select
        name="title"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      >
        <option value="">Choose an option</option>
        <option value="Text">String/Text</option>
        <option value="Number">Number</option>
      </select>
      <select
        name="summary"
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      >
        <option value="">Choose an option</option>
        <option value="Text">String/Text</option>
        <option value="Number">Number</option>
      </select>
      <button style={{ marginTop: "5px" }}>Create</button>
    </form>
  );
}
