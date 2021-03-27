import React from "react";

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
    const { user_id, title, addTask } = props;
    const newTask = {
      userId: user_id,
      title,
      completed: false,
    };
    addTask(newTask);
  };

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
