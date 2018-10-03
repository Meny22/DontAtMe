import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class TopicAddScreen extends Component {
    render() {
        return (
            <View>
                <TextInput placeholder="Topic"/>
            </View>
            );
    }
}