import React from 'react';
import { NavigationEvents } from 'react-navigation';
import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Linking,
  Dimensions,
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import GlobalStyles from '../Styles';
import Database from '../Database';
import Background from '../Components/Background';
import OpportunitySearch from '../Components/OpportunitySearch';
import Select from '../Components/Select';
import HomeCalendar from '../Components/HomeCalendar';
import Button from '../Components/Button';
import { getOpportunities } from '../LocalStorage';
import { FEEDBACK_FORM_URL } from '../Constants';

import HelpIcon from '../assets/images/help_filled.png';

const helpText = [
  'Welcome to ‘Explore the Law’',
  'There are 3 sections to this app:',
  'Sector profiles, grad profiles, and Monash opportunities.',
  'For your first time on the app, click ‘Select a Sector’ and choose a sector you are interested in. Click ‘Grad Profiles’. You will then be able to select a grad profile to see related graduate pathways. Click onto ‘Opportunities’ to browse current opportunities which you can choose to be ‘interested in’. These opportunities will then appear on your personalised calendar on your homepage, which you can monitor to ensure you never miss a deadline! Alternatively, you may search opportunities directly from the homepage.',
  'Explore the Law!',
];

const styles = StyleSheet.create({
  ...GlobalStyles,
  searchContainer: {
    flex: 2,
    marginBottom: moderateScale(5),
  },
  selectContainer: {
    flex: 2,
    marginBottom: moderateScale(5),
  },
  calendarContainer: {
    flex: 13,
    padding: moderateScale(3),
    paddingBottom: moderateScale(2),
  },
  buttonContainer: {
    flex: 1,
    alignSelf: 'center',
    maxWidth: scale(150),
  },
  feedbackLabel: {
    fontSize: moderateScale(12),
    margin: moderateScale(1),
    padding: moderateScale(1),
  },
  helpButton: {
    position: 'absolute',
    zIndex: 10,
    right: scale(2.5),
    bottom: verticalScale(2.5),
  },
  helpImage: {
    height: verticalScale(35),
    width: scale(35),
  },
});

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interestedOpps: [],

      helpPopup: false,
    };
  }

  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;
    const { interestedOpps, helpPopup } = this.state;
    const { width } = Dimensions.get('window');

    const sectorsData = Database.Sectors;
    const dates = [];
    interestedOpps.forEach((opp) => {
      if (opp && opp.dates) {
        opp.dates.forEach(date => dates.push(date));
      }
    });

    return (
      <View style={styles.container}>

        <NavigationEvents
          onWillFocus={() => getOpportunities()
            .then(oppIDs => this.setState({
              interestedOpps: oppIDs.map(id => Database.Opportunities[id]),
            }))}
        />
        <StatusBar />
        <Background />

        <Modal
          visible={helpPopup}
          transparent
          onRequestClose={() => this.setState({ helpPopup: false })}
        >
          <TouchableOpacity
            style={{ flex: 1 }}
            activeOpacity={1}
            onPress={() => this.setState({ helpPopup: false })}
          >
            <TouchableOpacity style={styles.popup} activeOpacity={1} onPress={() => {}}>
              <Text style={[styles.title, { fontSize: moderateScale(32), flex: 1 }]}>
                {'How to use this App'}
              </Text>
              <View style={{ flex: 8 }}>
                {helpText.map(text => (
                  <Text key={text} style={[styles.text, { textAlign: 'center', fontSize: scale(12), padding: scale(2) }]}>
                    {text}
                  </Text>
                ))}
              </View>
              <Button containerStyle={{ flex: 1 }} label="CLOSE" onPress={() => this.setState({ helpPopup: false })} />
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>

        <View style={{ flex: 1 }}>
          <View style={[styles.innerContainer, { width: width - moderateScale(60) }]}>
            <View style={styles.searchContainer}>
              <OpportunitySearch
                onSelect={searchTerm => navigate('List', {
                  headerType: 'search',
                  referingValue: searchTerm,
                  dataType: 'Opportunities',
                })}
                placeholder="Search Opportunities"
              />
            </View>
            <View style={styles.selectContainer}>
              <Select data={sectorsData} placeholder="Select a Sector" navigate={navigate} />
            </View>
            <View style={styles.calendarContainer}>
              <HomeCalendar data={dates} />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                containerStyle={{ padding: 0, margin: 0 }}
                labelStyle={styles.feedbackLabel}
                label="Leave Feedback"
                onPress={() => Linking.openURL(FEEDBACK_FORM_URL)}
              />
            </View>

            <TouchableOpacity
              onPress={() => this.setState({ helpPopup: true })}
              style={styles.helpButton}
            >
              <Image style={styles.helpImage} source={HelpIcon} />
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
