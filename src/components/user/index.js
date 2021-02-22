import React from "react";
import PropTypes from "prop-types";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function User(props) {
  return (
    <>
      <li className="media">
        <a onClick={props.toggle} href="#">
          {" "}
          <img
            src={props.user && props.user.avatar_url}
            className="mr-3 img-thumbnail d-block"
            style={{ width: 150, height: 150 }}
            alt="user-image"
          />
        </a>
        <div className="media-body">
          <h5 className="mt-0 mb-1">
            <a onClick={props.toggle} href="#">
              {props.user && props.user.login.toUpperCase()}
            </a>
          </h5>
          <p>
            Type: <em>{props.user && props.user.type}</em>
            <br />
            <small>
              <a target="_blank" href="//github.com/login">
                Login URL
              </a>
              <br />
              <a target="_blank" href={props.user && props.user.html_url}>
                Profile URL
              </a>
            </small>
          </p>
        </div>
      </li>
      <hr />
    </>
  );
}

User.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default User;
