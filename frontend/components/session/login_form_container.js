import {connect} from 'react-redux';
import {login}from '../../actions/session_actions.js';
import FormUser from './session_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "Sign In"
});

const mapDispatchToProps = dispatch => ({
  processForm: (form) => dispatch(login(form))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormUser)
