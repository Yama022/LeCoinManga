import { connect } from 'react-redux';
import Form from '../components/Form';

const mapStateToProps = (state) => ({
  isLoggin: state.user.isSuccessfullyLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
