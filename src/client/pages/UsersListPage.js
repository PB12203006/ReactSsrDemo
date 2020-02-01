import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

const mapStateToProps = state => {
    return { users: state.users };
};

const loadData = store => {
    return store.dispatch(fetchUsers());
};

class UserList extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers = () => {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        });
    };

    render() {
        return (
            <div>
                User List
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}

UserList.propTypes = {
    fetchUsers: PropTypes.func,
    users: PropTypes.array,
};

export default {
    component: connect(mapStateToProps, { fetchUsers })(UserList),
    loadData,
};
