import React, { useEffect, useState } from "react";
import "./App.css";
import ListUsers from "../src/components/listUsers";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/actions/user";
import { getSearchUsers } from "./redux/actions/search";
import SearchInput from "./components/searchInput";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [keyword, setKeyword] = useState("");
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({});

  const toggle = (userId) => {
    setShow(!show);
  };
  useEffect(() => {
    console.log("users: ", users);
    dispatch(getUsers());
  }, []);

  const searchChange = (e) => {
    dispatch(getSearchUsers(e.target.value));
    // setKeyword(e);
  };
  return (
    <React.Fragment>
      <div className="container bg-light p-4">
        <h4 className="pb-4 text-center bg-gradient-light">
          List of GitHub Users
        </h4>
        <div className="row p-4">
          {users.loading && <p>Loading...</p>}
          {users.length === 0 && !loading && <p>No users available!</p>}
          {error && !loading && <p>{error}</p>}
          <div className="col-md-12 mb-4">
            <div className="container">
              <div className="row">
                <SearchInput cbSearch={searchChange} />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            {users.length > 0 && <ListUsers toggle={toggle} users={users} />}
          </div>
        </div>
      </div>
      <Modal show={show} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="media">
            <a onClick={toggle} href="#">
              {" "}
              <img
                src={userData && userData.avatar_url}
                className="mr-3 img-thumbnail d-block"
                style={{ width: 150, height: 150 }}
                alt="user-image"
              />
            </a>
            <div className="media-body">
              <h5 className="mt-0 mb-1">
                <a onClick={userData.toggle} href="#">
                  {userData.user && userData.user.login.toUpperCase()}
                </a>
              </h5>
              <p>
                Full Name: <em>{userData && userData.fullname}</em><br/>
                Type: <em>{userData && userData.type}</em><br/>
                Votes: <em>{userData && userData.type}</em><br/>
                Repos: <em>{userData && userData.type}</em><br/>
                <br />
                <small>
                  <a target="_blank" href="//github.com/login">
                    Login URL
                  </a>
                  <br />
                  <a target="_blank" href={userData.user && userData.html_url}>
                    Profile URL
                  </a>
                </small>
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggle}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default App;
