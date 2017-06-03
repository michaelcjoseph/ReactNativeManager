import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

class EmployeeListItem extends Component {
  render() {
    const { name } = this.props.employee;

    return (
      <CardSection>
        <Text style={styles.titleStyle}>
          {name}
        </Text>
      </CardSection>
    );
  }
}

EmployeeListItem.propTypes = {
  employee: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmployeeListItem;
