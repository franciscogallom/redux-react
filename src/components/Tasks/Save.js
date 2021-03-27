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
      <button>Guardar</button>
    </div>
  );
};

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export default connect(mapStateToProps, tasksActions)(Save);
