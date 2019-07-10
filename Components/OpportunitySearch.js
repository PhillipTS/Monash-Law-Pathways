import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import GlobalStyles from '../Styles';
import Button from './Button';
import { WHITE, BORDER_RADIUS } from '../Constants';

const styles = StyleSheet.create({
  ...GlobalStyles,
  componentContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: moderateScale(1),
    maxHeight: verticalScale(60),
    borderRadius: BORDER_RADIUS,
    borderColor: 'black',
    borderWidth: scale(1),
    backgroundColor: WHITE,
  },
  searchContainer: {
    flex: 3,
    marginLeft: scale(10),
    textAlign: 'center',
  },
});

class OpportunitySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }

  render() {
    const { onSelect, placeholder } = this.props;
    const { searchTerm } = this.state;
    return (
      <View style={styles.componentContainer}>
        <TextInput
          style={[styles.searchContainer, styles.text]}
          placeholder={placeholder}
          onChangeText={val => this.setState({ searchTerm: val })}
        />
        <View style={{ flex: 1, alignSelf: 'center' }}>
          <Button
            onPress={() => onSelect(searchTerm)}
            label="SEARCH"
          />
        </View>
      </View>
    );
  }
}

export default OpportunitySearch;
