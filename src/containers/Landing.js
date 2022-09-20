import { connect } from "react-redux";
import Landing from "../components/Landing";

import { getAllTypes } from "../actions/type";

const mapStateToProps = (state) => ({
  types: state.type.types,
});

const mapDispatchToProps = (dispatch) => ({
  getAllTypes: (payload) => dispatch(getAllTypes(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);