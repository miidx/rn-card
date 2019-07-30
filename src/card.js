import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  rowField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginVertical: 10,
  },
};

const Card = ({
  shadow, borderColor, borderRadius, backgroundColor, containerStyle, onPress, children,
}) => {
  const cardContainer = borderColor
    ? [styles.container, {
      backgroundColor,
      borderColor,
      borderRadius,
      borderWidth: 1,
    }] : [styles.container, {
      backgroundColor: '#fff',
      borderRadius,
    }];

  const shadowedContainer = shadow
    ? [cardContainer, {
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 3,
    }] : cardContainer;

  return (
    <TouchableOpacity style={[shadowedContainer, containerStyle]} onPress={onPress}>
      <View style={styles.rowField}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default Card;

Card.propTypes = {
  shadow: PropTypes.bool,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.number,
  backgroundColor: PropTypes.string,
  containerStyle: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  onPress: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  shadow: false,
  borderColor: null,
  borderRadius: 5,
  backgroundColor: '#00f',
  containerStyle: {},
  onPress: () => {},
};
