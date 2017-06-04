import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.onButtonPress = this.onButtonPress.bind(this);
    this.onTextPress = this.onTextPress.bind(this);
    this.onDeletePress = this.onDeletePress.bind(this);
    this.onAcceptDelete = this.onAcceptDelete.bind(this);
    this.onDeclineDelete = this.onDeclineDelete.bind(this);
  }

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onDeletePress() {
    this.setState({
      showModal: true,
    });
  }

  onAcceptDelete() {
    const { uid } = this.props.employee;

    this.props.employeeDelete({ uid });
  }

  onDeclineDelete() {
    this.setState({
      showModal: false,
    });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onButtonPress}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onDeletePress}>
            Delete
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAcceptDelete}
          onDecline={this.onDeclineDelete}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

EmployeeEdit.propTypes = {
  employee: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  shift: PropTypes.string.isRequired,
  employeeUpdate: PropTypes.func.isRequired,
  employeeSave: PropTypes.func.isRequired,
  employeeDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeSave, employeeDelete },
)(EmployeeEdit);
