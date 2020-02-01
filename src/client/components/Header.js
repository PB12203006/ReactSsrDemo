import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = ({ auth }) => ({
  auth,
});

const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google"> Login</a>
  );
  return (
    <div>
      <Link to="/">React SSR</Link>
      <Link to="/users">Users</Link>
      {auth && <Link to="/admin">admin</Link>}
      {authButton}
    </div>
  );
};

Header.propTypes = {
  auth: PropTypes.bool,
};

export default connect(mapStateToProps)(Header);
