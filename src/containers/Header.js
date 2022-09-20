import { connect } from "react-redux";
import Header from "../components/Header";

import { getUser, logoutUser } from "../actions/user";

const mapStateToProps = (state) => ({
    user: state.user.user,
    isLoggedIn: Object.keys(state.user.user).length > 0,
});

const mapDispatchToProps = (dispatch) => ({
    getUser: (payload) => dispatch(getUser(payload)),
    logOut: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);