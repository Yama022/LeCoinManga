import { connect } from 'react-redux';
import Profile from '../components/Profile';



const mapStateToProps = (state) => ({
  user: state.user.user,
  announcement: state.user.announcement,
  announcementIsPublished: state.user.announcementIsPublished,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
