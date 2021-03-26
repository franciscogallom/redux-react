import React, { useEffect } from "react";

import { connect } from "react-redux";

import * as usersActions from "../../actions/usersActions";

const Users = ({ users, getUsers, loading, error }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return loading ? (
    <h1>Cargando...</h1>
  ) : error ? (
    <h1>Algo salió mal...</h1>
  ) : (
    <div className="margin">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          {users ? (
            users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                </tr>
              );
            })
          ) : (
            <h1>Cargando</h1>
          )}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);
