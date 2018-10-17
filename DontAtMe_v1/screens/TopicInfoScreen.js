import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, Alert, ActivityIndicator, FlatList, Image, TextInput } from 'react-native';
import { createStackNavigator, withNavigation } from 'react-navigation';
var config = require('../config/config.js');

class Opinion extends Component {
    render() {
        let anonymousPic = '../images/silhoutte.png'
        return (
            <View style={styles.opinion}>
                <Image source={require(anonymousPic)} style={{ width: 50, height: 50 }} />
                <Text>{this.props.opinion}</Text>
                <Text>{this.props.opinionBody}</Text>
            </View>
            );
    }
}

class OpinionContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { isLoadingOpinions: true }
    }
    componentDidMount() {
        return fetch(config.apiURL+'/api/topic/1/opinions', { method: 'GET' })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoadingOpinions: false,
                    dataSource: responseJson,
                });
                console.log(this.state.dataSource);
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        if (this.state.isLoadingOpinions) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <View style={styles.opinionContainer}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => <Opinion opinion={item.response} opinionBody={item.body}></Opinion>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

class OpinionButtonsContainer extends Component {
    constructor(props) {
        super(props);
        this._onPressButton = this._onPressButton.bind(this);
    }

    _onPressButton(opinion) {
        this.props.navigation('OpinionAddScreen', { opinion: opinion })
    }

    render() {
        return (
            <View style={styles.opinionButtons}>
                <Button title="Agree" onPress={() => this._onPressButton('AGREE')}></Button>
                <Button title="Disagree" onPress={() => this._onPressButton('DISAGREE')}></Button>
            </View>
            );
    }
}

class TopicContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { isLoadingTopic: true }
    }
    componentDidMount() {
        return fetch(config.apiURL+'/api/topic/1', { method: 'GET' })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoadingTopic: false,
                    dataSource: responseJson,
                });
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        if (this.state.isLoadingTopic) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        let anonymousPic = '../images/silhoutte.png'
        return (
            <View style={styles.topicContainer}>
                <Image source={require(anonymousPic)} style={{ width: 100, height: 100 }} />
                <View>
                    <Text>{this.state.dataSource.topic_title}</Text>
                </View>
            </View>
        );
    }
}

export default class TopicInfoScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <TopicContainer></TopicContainer>
                <OpinionButtonsContainer navigation={navigate}></OpinionButtonsContainer>
                <OpinionContainer></OpinionContainer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topicContainer: {
        position: 'absolute',
        top: 25,
        width: 400,
        height: 200,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'black',
    },
    opinionButtons: {
        flexDirection: 'row',
        position: 'absolute',
        top: 225
    },
    opinionContainer: {
        position: 'absolute',
        top: 300,
        width: 400,
        height:300,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'black',
    },
    opinion: {
        width: 300,
        height: 100,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'black',
    }
});
