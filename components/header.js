import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerTitle}> Crypto App </Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        
        display: "flex",
        alignItems: "center",
        marginTop: 55
    },
    headerTitle:{
        fontSize: 20,
        fontWeight: 'bold'
    }
})