import React, { useEffect } from "react";

import { connect } from "react-redux";

import * as tasksActions from "../../actions/tasksActions";

const Save = (props) => {
  const changeUserId = (ev) => {
    props.changeUserId(ev.target.value);
  };

  const changeTitle = (ev) => {
    props.changeTitle(ev.target.value);
  };

  const saveTask = () => {
    const {
      match: {
        params: { userId, taskId },
      },
      tasks,
      user_id,
      title,
      addTask,
      editTask,
    } = props;

    const newTask = {
      userId: user_id,
      title,
      completed: false,
    };

    if (userId && taskId) {
      const task = tasks[userId][taskId];
      const newEditTask = {
        ...newTask,
        completed: task.completed,
        id: task.id,
      };
      editTask(newEditTask);
    } else {
      addTask(newTask);
    }
  };

  useEffect(() => {
    const {
      match: {
        params: { userId, taskId },
      },
      tasks,
      changeUserId,
      changeTitle,
    } = props;

    if (userId && taskId) {
      const task = tasks[userId][taskId];
      changeUserId(task.userId);
      changeTitle(task.title);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Guardar tarea.</h1>
      <p>Usuario id: </p>
      <input type="number" value={props.user_id} onChange={changeUserId} />
      <br />
      <br />
      <p>Titulo</p>
      <input type="text" value={props.title} onChange={changeTitle} />
      <br />
      <br />
      <button onClick={saveTask}>Guardar</button>
    </div>
  );
};

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export default connect(mapStateToProps, tasksActions)(Save);
