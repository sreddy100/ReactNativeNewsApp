import React, { useState } from 'react';  
import { View, Text, Button, StyleSheet, TextInput, FlatList, ActivityIndicator, Image } from 'react-native';  
import { createAppContainer } from 'react-navigation';  
import { createStackNavigator } from 'react-navigation-stack';  
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { useSafeArea } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';



class DetailScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {  
        return {  
            title: navigation.getParam('otherParam', 'Story'),  
            headerStyle: {  
                backgroundColor: '#66f2a3',  
            }, 
        };  
        
        
    }; 
    


    render() {
        const {navigate} = this.props.navigation;
        
        // let Image_Http_URL = {uri: this.props.navigation.state.params.JSON_ListView_Clicked_Item.urlToImage ? this.props.navigation.state.params.JSON_ListView_Clicked_Item.urlToImage
            // : 'No Value Passed'};
        return (
            
            <View style = {styles.detailContainer}>
                <Image source = {{uri: this.props.navigation.state.params.JSON_ListView_Clicked_Item.urlToImage}} style = {styles.imageStyle}/>
                <Text style = {styles.headingText}>{this.props.navigation.state.params.JSON_ListView_Clicked_Item.title
                ? this.props.navigation.state.params.JSON_ListView_Clicked_Item.title
                : 'No Value Passed'}</Text>
                <Text style = {styles.bodyText}>{this.props.navigation.state.params.JSON_ListView_Clicked_Item.content
                ? this.props.navigation.state.params.JSON_ListView_Clicked_Item.content
                : 'No Value Passed'}</Text>
            </View>
        );
    }
    
    
}

const styles = StyleSheet.create({
    inputStyle:{
        height : 40,
        width : 320,
        backgroundColor : "#65f7a5",
        borderWidth : 1,
        borderTopLeftRadius: 15, 
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        flex: 1,
        height: 220,
        marginHorizontal: 10,
         width: 350,
        marginTop: 24,
        padding: 20,
        backgroundColor: '#65f7a5',
        fontSize: 24,
        borderColor: 'black',
        borderWidth: 2,
      },
    boxItem: {
        flex: 1,
        flexDirection: 'row',
        width: 300,
        height: 200,
        // borderColor: 'black',
        // borderWidth: 1,
    },
    boxItemText: {
        width: 150,
        height: 190,
        flexWrap: 'wrap',
        flexShrink: 0,
        borderColor: 'red',
        borderWidth: 1,
    },
    headingText: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    bodyText: {
        margin: 0,
        flex: 1,
        fontSize: 14,
        padding: 0
    },
    detailBodyText: {
        margin: 0,
        
        fontSize: 14,
        padding: 0
    },
    detailContainer: {
        borderColor: '#65f7a5',
        borderWidth: 2,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        height: 200,
        resizeMode: 'stretch',
        margin: 5,
        alignSelf: "stretch",
    },
    
});

export default DetailScreen