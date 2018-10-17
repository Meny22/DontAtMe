import React, { Component } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator,FlatList } from 'react-native';
var config = require('../config/config.js');

class Topic extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.topic_title}</Text>
                <Text>{this.props.topic_date}</Text>
            </View>
            );
    }
}

class OpinionContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { isLoadingTopics: true }
    }
    componentDidMount() {
        return fetch(config.apiURL+'/api/topic/all', { method: 'GET' })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoadingTopics: false,
                    dataSource: responseJson,
                });
                console.log(this.state.dataSource);
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        if (this.state.isLoadingTopics) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <View>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => <Topic topic_title={item.topic_title} topic_date={item.date_created}></Topic>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

export default class HomePageScreen extends Component {
    _onButtonPress() {
        this.props.navigation.navigate("TopicAddScreen");
    }

    render() {
        return (
        	<View>
	            <View>
	                <Button title="Create topic" onPress={() => this._onButtonPress()}/>
	            </View>
	            <View>
	            	<Text>My topics</Text>
	            	<OpinionContainer/>
	            </View>
	        </View>
            );
    }
}