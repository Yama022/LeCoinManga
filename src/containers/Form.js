import { connect } from 'react-redux';
import Form from '../components/Form';

const mapStateToProps = (state) => ({
  isLoggin: state.user.isSuccessfullyLoggedIn,
  genres: state.genre.genres,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
