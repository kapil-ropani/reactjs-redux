import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import usersData from "users.json";
import { getUsers } from "../../redux/actions/user";
import { useSelector, useDispatch } from "react-redux";
import User from "../user";

const ListUsers = (props) => {
  return (
    <>
      <ul className="list-unstyled">
        {props.users &&
          props.users.map((item, key) => <User toggle={props.toggle} key={key} user={item} />)}
      </ul>
    </>
  );
};

ListUsers.propTypes = {
  // item: PropTypes.any,
};
export default ListUsers;
