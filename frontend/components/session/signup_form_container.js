import {connect} from 'react-redux';
import {signUp} from '../../actions/session_actions.js';
import FormUser from './session_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "Sign Up"
});

const mapDispatchToProps = dispatch => ({
  processForm: form => dispatch(signUp(form))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormUser)
