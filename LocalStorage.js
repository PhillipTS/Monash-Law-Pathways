import { AsyncStorage } from 'react-native';
import { INTERESTED_OPPS_KEY } from './Constants';

export const getOpportunities = () =>
    AsyncStorage.getItem(INTERESTED_OPPS_KEY).then(data => data ? parseData(data) : []).catch(error => console.error(error));

export const setOpportunity = (id) =>
    AsyncStorage.setItem(INTERESTED_OPPS_KEY, id !== null ? String(id) : '').catch(error => console.error(error));

export const addOpportunity = (id) => getOpportunities().then(data =>
    !data.includes(id) ? AsyncStorage.setItem(INTERESTED_OPPS_KEY, data + ',' + String(id)).catch(error => console.error(error)) : null
);

const parseData = (data) => data.split(',').map(id => parseInt(id, 10));