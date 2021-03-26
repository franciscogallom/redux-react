import React, { useEffect } from "react";

import { connect } from "react-redux";

import * as usersActions from "../../actions/usersActions";
import * as publicationsActions from "../../actions/publicationsActions";

const Publications = (props) => {
  useEffect(() => {
    async function fetchData() {
      if (!props.usersReducer.users.length) {
        await props.getUsers();
      }
    }
    fetchData();
    props.getPublicationById(props.match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Publicaciones de {props.match.params.id}</h1>;
      {props.publicationsReducer.publications.map((publication) => {
        return (
          <div key={publication.id}>
            <h3>{publication.title}</h3>
            <p>{publication.body}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ usersReducer, publicationsReducer }) => {
  return {
    usersReducer,
    publicationsReducer,
  };
};

const mapDispatchToProps = {
  ...usersActions,
  ...publicationsActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Publications);
