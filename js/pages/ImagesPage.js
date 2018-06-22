/**
 * 照片列表
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  ListView,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

var {height, width} = Dimensions.get('window');

export default class ImagesPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <View style={{width:width,height:height}} >
            <Text>{this.props.albumName}</Text>
            <TouchableOpacity style={{width:60, borderWidth:3, borderColor:'rgba(0,0,0,0.2)', alignItems:'center', justifyContent:'center', height:60, backgroundColor:'#ff585b', borderRadius:30, position:'absolute', bottom:70, right:20,zIndex:99}}>
                <Icon name="add" size={22} color="#fff"/>
            </TouchableOpacity>
        </View>
    }
}