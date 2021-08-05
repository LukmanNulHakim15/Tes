import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class MainApp extends Component {
    constructor(props){
        super(props);
        this.state={
            ActiveCryptoCurrencies: "",
            data:{},
            TotalCryptoCurrencies: "",
            ActiveMarkets:"",
            TotalExcenges:""
        }
    }
    render() {
        return (
            <View>
                <Text> ActiveCryptoCurrencies : {this.state.ActiveCryptoCurrencies} </Text>
                <Text>TotalCryptoCurrencies : {this.state.TotalCryptoCurrencies}</Text>
                <Text>ActiveMarkets : {this.state.ActiveMarkets}</Text>
            </View>
        )
    }
}
