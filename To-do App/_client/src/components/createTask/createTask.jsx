import React, { useEffect, useState } from "react";
import {
  createRecord,
  deleteRecord,
  getRecord,
  updateRecord,
} from "../../services/apiServices";
import { useNavigate, useParams } from "react-router-dom";

export const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setIsEdit(true);
      const getTaskDetails = async () => {
        const url = `http://localhost:8080/api/tasks/${id}`;
        const task = await getRecord(url);
        if (task) {
          setTitle(task.title);
          setDescription(task.description);
          setCompleted(task.completed);
        }
      };
      getTaskDetails();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userToken = localStorage.getItem("token").split(".")[1];
    const user = JSON.parse(atob(userToken));
    let url = `http://localhost:8080/api/tasks`;
    if (id) {
      const task = { title, description, completed, userId: user.userId };
      await updateRecord(`${url}/${id}`, task);
    } else {
      let task = {
        title,
        description,
        completed: false,
        userId: user.userId,
      };
      await createRecord(url, task, false);
    }
    navigate("/tasks");
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        const url = `http://localhost:8080/api/tasks/${id}`;
        await deleteRecord(url);
        alert(`record deleted with id ${id}`);
        navigate("/tasks");
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div className="create-task-form">
      <h2>{`${isEdit ? "Update" : "Create"} Task`}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          className="form-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea
          className="form-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {isEdit && (
          <>
            <br />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <label htmlFor="completed">Completed:</label>
              <input
                style={{ marginBottom: "12px" }}
                type="radio"
                name="completed"
                value="yes"
                checked={completed}
                onChange={() => {
                  setCompleted(true);
                }}
              />
              <label htmlFor="yes">Yes</label>
              <input
                style={{ marginBottom: "12px" }}
                type="radio"
                name="completed"
                value="no"
                checked={!completed}
                onChange={() => {
                  setCompleted(false);
                }}
              />
              <label htmlFor="no">No</label>
            </div>
          </>
        )}
        <br />
        <button type="submit">{`${isEdit ? "Update" : "Create"} Task`}</button>
        {isEdit && (
          <button
            onClick={handleDelete}
            className="form-button delete-button"
            type="button"
          >
            Delete Task
          </button>
        )}
      </form>
    </div>
  );
};
