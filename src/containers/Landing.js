import { connect } from "react-redux";
import Landing from "../components/Landing";

import { getAllGenres } from "../actions/genre";

const mapStateToProps = (state) => ({
  genres: state.genre.genres,
});

const mapDispatchToProps = (dispatch) => ({
  getAllGenres: (payload) => dispatch(getAllGenres(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
