import React, { PureComponent } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 19,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    color: '#D8D8D8',
  },
});

class Card extends PureComponent {
  render() {
    const {
      title, subtitle, style, ...rest
    } = this.props;

    return (
      <TouchableOpacity
        {...rest}
        style={[styles.container, style]}
      >
        <Text style={styles.title}>{title}</Text>

        <View style={styles.row}>
          <Text>{subtitle}</Text>          
        </View>
      </TouchableOpacity>
    );
  }
}

export default Card;
