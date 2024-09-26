import React, { useEffect, useState } from "react";
import moment from "moment";
import { FaEdit } from "react-icons/fa";
import { getRecords } from "../../services/apiServices";
import { useNavigate } from "react-router-dom";

export const ListTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const getTasks = async () => {
      const url = "http://localhost:8080/api/tasks";
      let _tasks = await getRecords(url);
      setLoading(false);
      setTasks(_tasks);
    };
    getTasks();
  }, []);

  const getTableHeaders = () => {
    const tableHeaders = [
      "Task Id",
      "Title",
      "Description",
      "Created At",
      "Updated At",
      "Completed",
      "Actions",
    ];
    return (
      <thead>
        <tr>
          {tableHeaders.map((header) => {
            return <th>{header}</th>;
          })}
        </tr>
      </thead>
    );
  };

  const getTableBody = () => {
    return (
      <tbody>
        {tasks.map((task) => {
          return (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{moment(task.createdDate).format("DD/MM/YYYY")}</td>
              <td>{moment(task.updatedAt).format("DD/MM/YYYY")}</td>
              <td>
                {task.completed ? (
                  <span className="completed">Yes</span>
                ) : (
                  <span className="not-completed">No</span>
                )}
              </td>
              <td className="task-actions">
                <a href={`tasks/${task.id}/update`} className="task-action">
                  <FaEdit size={20} color="#333" title="Edit Task" />
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tasks-list">
      {tasks.length && (
        <table>
          {getTableHeaders()}
          {getTableBody()}
        </table>
      )}
    </div>
  );
};
