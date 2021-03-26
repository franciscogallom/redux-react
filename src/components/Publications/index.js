import React, { useEffect } from "react";

import { connect } from "react-redux";

import * as usersActions from "../../actions/usersActions";

const Publications = (props) => {
  useEffect(() => {
    if (!props.users.length) {
      props.getUsers();
    }
  });

  return <div>Publicaciones de {props.match.params.id}</div>;
};

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Publications);
