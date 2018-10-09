import React from 'react';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    // debugger
    let errors = this.errors ? Object.values(this.errors) : [];

    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input
              type='text'
              value={this.state.username}
              onChange={this.update('username')} />
          </label>

          <label>Password:
            <input
              type='password'
              value={this.state.password}
              onChange={this.update('password')} />
          </label>
          <button onClick={this.handleSubmit}>{this.props.formType}</button>
        </form>

        { this.props.formType === 'Sign Up' ?
          <Link to="/login">Sign In!</Link> : <Link to="/signup">Sign Up!</Link>}

        <ul>
          {errors}
        </ul>
      </div>
    )
  }
}

export default withRouter(SessionForm);
