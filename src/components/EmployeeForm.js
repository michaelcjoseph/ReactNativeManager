import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Picker, Text } from 'react-native';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions';

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
};

const EmployeeForm = props => (
  <View>
    <CardSection>
      <Input
        label="Name"
        placeholder="Jane"
        value={props.name}
        onChangeText={text => props.employeeUpdate({ prop: 'name', value: text })}
      />
    </CardSection>

    <CardSection>
      <Input
        label="Phone"
        placeholder="555-555-5555"
        value={props.phone}
        onChangeText={text => props.employeeUpdate({ prop: 'phone', value: text })}
      />
    </CardSection>

    <CardSection>
      <Text style={styles.pickerTextStyle}>Shift</Text>
      <Picker
        style={{ flex: 1 }}
        selectedValue={props.shift}
        onValueChange={day => props.employeeUpdate({ prop: 'shift', value: day })}
      >
        <Picker.Item label="Monday" value="Monday" />
        <Picker.Item label="Tuesday" value="Tuesday" />
        <Picker.Item label="Wednesday" value="Wednesday" />
        <Picker.Item label="Thursday" value="Thursday" />
        <Picker.Item label="Friday" value="Friday" />
        <Picker.Item label="Saturday" value="Saturday" />
        <Picker.Item label="Sunday" value="Sunday" />
      </Picker>
    </CardSection>
  </View>
);

EmployeeForm.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  shift: PropTypes.string.isRequired,
  employeeUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
