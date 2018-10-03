import React, { Component } from 'react';
import { View, Text, TextInput,Button } from 'react-native';

export default class OpinionAddScreen extends Component{
    constructor(props) {
        super(props);
        this.state = { opinion: '' };
    }

    _onButtonPress(opinion, opinionBody) {
        fetch('http://ec8ccc91.ngrok.io/api/topic/1/opinion', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                body: opinionBody,
                response: opinion,
            }),
        });
        this.props.navigation.navigate("TopicInfoScreen", {refresh:true});
    }

    render() {
        const { navigation } = this.props;
        const opinion = navigation.getParam('opinion', 'NONE');
        console.log(this.props.navigation.state.params);
		return(
            <View>
                <Text>Tell the people why you {opinion}</Text>
                <TextInput style={{ height: 40 }} placeholder="Type your opinion here!" onChangeText={(text) => this.setState({ opinion: text })} />
                <Button title="Post" onPress={() => this._onButtonPress(opinion, this.state.opinion)}></Button>
            </View>
			);
	}
}