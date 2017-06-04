import React, { PropTypes } from 'react';
import { View, Text, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const styles = {
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyle: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    justifyContent: 'center',
  },
};

const Confirm = (props) => {
  const { containerStyle, cardSectionStyle, textStyle } = styles;

  return (
    <Modal
      visible={props.visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>
            {props.children}
          </Text>
        </CardSection>

        <CardSection styles={cardSectionStyle}>
          <Button onPress={props.onAccept}>
            Yes
          </Button>
          <Button onPress={props.onDecline}>
            No
          </Button>
        </CardSection>
      </View>
    </Modal>
  );
};

Confirm.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  onAccept: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired,
};

export { Confirm };
