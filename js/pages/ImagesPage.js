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
  LayoutAnimation
} from 'react-native';

export default class ImagesPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <View>
            <Text>{this.props.albumName}</Text>
        </View>
    }
}