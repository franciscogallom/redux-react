import React from "react";
// import axios from "axios";

import { connect } from "react-redux";

const Users = ({ users }) => {
  // useEffect(() => {
  //   async function getData() {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     setUsers(response.data);
  //   }
  //   getData();
  // });

  return (
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

export default connect(mapStateToProps, {
  /* Actions */
})(Users);
