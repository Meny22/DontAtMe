import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class HomePageScreen extends Component {
    _onButtonPress() {
        this.props.navigation.navigate("TopicAddScreen");
    }

    render() {
        return (
            <View>
                <Button title="Create topic" onPress={() => this._onButtonPress()}/>
            </View>
            );
    }
}