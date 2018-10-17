import React, { Component } from 'react';
import { View, Text, TextInput, Button, Picker} from 'react-native';
var config = require('../config/config.js');

export default class TopicAddScreen extends Component {
	
	getCategoryValues() {
		return fetch(config.apiURL+'/api/category/all', { method: 'GET' })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    categories: responseJson,
                    doneLoading: true
                });
                console.log(this.state.categories);
            }).catch((error) => {
                console.log(error)
            })
	}

	constructor(props) {
        super(props);
        this.state = { topic_title: '', doneLoading: false, selectedCategory: 2 };
        this.getCategoryValues();
    }
	_onButtonPress(topic_title, category) {
		console.log("ID IS "+category)
		fetch(config.apiURL+'/api/topic', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                topic_title:topic_title,
                date_created:new Date(),
                category:{id:category}
            }),
        });
        this.props.navigation.navigate("HomeScreen");
	}

    render() {
    	if(this.state.doneLoading){
	        return (
	            <View>
	                <TextInput placeholder="Title of topic" onChangeText={(text) => this.setState({ topic_title: text })}/>
	                <Picker 
	                	selectedValue={this.state.selectedCategory}
  						style={{ height: 50, width: 400 }}
  						onValueChange={(itemValue) => this.setState({selectedCategory: itemValue})}>
		                {this.state.categories.map((item) => {
		        			return (<Picker.Item label={item.Name} value={item.Id} key={item.Id}/>) 
		   				 })}
	                </Picker>
	                <Button title="Create topic" onPress={() => this._onButtonPress(this.state.topic_title, this.state.selectedCategory)}/>
	            </View>
	            );
        }
        return null;
    }
}