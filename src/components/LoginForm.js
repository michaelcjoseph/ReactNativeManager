import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(password) {
    this.props.passwordChanged(password);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  emailChanged: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  passwordChanged: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
});

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser },
)(LoginForm);
