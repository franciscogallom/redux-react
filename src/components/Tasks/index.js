import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as tasksActions from "../../actions/tasksActions";

const Tasks = (props) => {
  useEffect(() => {
    props.getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showTasks = (userId) => {
    const { tasks, deleteTask } = props;
    const userTasks = {
      ...tasks[userId],
    };

    return Object.keys(userTasks).map((taskId) => (
      <div key={taskId}>
        <input type="checkbox" defaultChecked={userTasks[taskId].completed} />
        {userTasks[taskId].title}
        <Link to={`/tasks/save/${userId}/${taskId}`}>
          <button>Editar</button>
        </Link>
        <button onClick={() => deleteTask(taskId)}>Eliminar</button>
      </div>
    ));
  };
  console.log(props.tasks);
  return (
    <div>
      <Link to="/tasks/save">
        <button>Agregar</button>
      </Link>
      {Object.keys(props.tasks).map((userId) => {
        return (
          <div key={userId}>
            <h2>Usuario: {userId}</h2>
            {showTasks(userId)}
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export default connect(mapStateToProps, tasksActions)(Tasks);
