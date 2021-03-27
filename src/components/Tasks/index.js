import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as tasksActions from "../../actions/tasksActions";

const Tasks = (props) => {
  useEffect(() => {
    props.getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showTasks = (id) => {
    const { tasks } = props;
    const userTasks = {
      ...tasks[id],
    };

    return Object.keys(userTasks).map((taskId) => (
      <div key={taskId}>
        <input type="checkbox" defaultChecked={userTasks[taskId].completed} />
        {userTasks[taskId].title}
      </div>
    ));
  };

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
