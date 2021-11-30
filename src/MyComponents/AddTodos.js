import React, { useState } from "react";

export default function AddTodos({ addTodo }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description cannot be blank");
    }
    else{
     addTodo(title, desc);
     setTitle("");
     setDesc("");
    }
  };

  return (
    <div className="container my-3">
      <h3>Add a todos</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo title
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Todo description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </form>
    </div>
  );
}
