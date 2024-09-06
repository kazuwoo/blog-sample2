import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <div>HOGE</div>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        Home
      </Link>
      {!isAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          Login
        </Link>
      ) : (
        <>
          <Link to="/createpost">
            <FontAwesomeIcon icon={faFilePen} />
            CreatePost
          </Link>

          <Link to="/logout">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            Logout
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
