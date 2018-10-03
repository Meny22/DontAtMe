import React, { Component } from 'react';
import { View } from 'react-native';
import AppNavigator from './AppNavigator';
import TopicInfoScreen from './screens/TopicInfoScreen';

export default class App extends Component {
    render() {
        return (
           <AppNavigator />
        );
    }
}