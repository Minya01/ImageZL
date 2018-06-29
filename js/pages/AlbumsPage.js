/**
 * 相册列表
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
  LayoutAnimation,
  TouchableOpacity
} from 'react-native';

import ImagesPage from './ImagesPage';

var images = {
    image1:require('../../res/images/image1.jpg'),
    image2:require('../../res/images/image2.jpg'),
    image3:require('../../res/images/image3.jpg'),
    image4:require('../../res/images/image4.jpg'),
    image5:require('../../res/images/image5.jpg'),
    image6:require('../../res/images/image6.jpg'),
    image7:require('../../res/images/image7.jpg')
};

var albums = [
    {
        name: '相册1',
        artist: '苏苏',
        image: images.image1
    },
    {
        name: '相册2',
        artist: '苏苏',
        image: images.image2
    },
    {
        name: '相册3',
        artist: '苏苏',
        image: images.image3
    },
    {
        name: '相册4',
        artist: '苏苏',
        image: images.image4
    },
    {
        name: '相册5',
        artist: '苏苏',
        image: images.image5
    },
    {
        name: '相册6',
        artist: '苏苏',
        image: images.image6
    },
    {
        name: '相册7',
        artist: '苏苏',
        image: images.image7
    }
];

// 设置宽高：屏幕宽高
var {height, width} = Dimensions.get('window');

export default class AlbumsPage extends Component{
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 != r2});
        this.state = {
            dataSource: ds.cloneWithRows(albums),
            text:''
        };
    }

    // 某一个相册
    eachAlbum(album){
        let {navigator} = this.props;
        return <View style={{height:180,width:150,margin:10,backgroundColor:'#fff'}} >
                <TouchableOpacity
                        onPress={() => {
                            navigator.push({
                                name:album.name,
                                component:ImagesPage,
                                params:{
                                    albumName:album.name,
                                    albums:[{
                                        node:{
                                            image:{
                                                uri:''
                                            }
                                        }
                                    }]
                                }
                            })
                        }} >
                    <Image source={album.image} resizeMode="cover" style={{width:150,height:150}} />
                    <View>
                        <Text style={{margin:10,marginBottom:0,fontSize:12,color:'#666'}}>
                            {album.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
    }

    // 渲染相册列表
    renderAlbums(){
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        return <ListView 
                dataSource={this.state.dataSource}
                contentContainerStyle={{justifyContent:'center',flexDirection:'row',flexWrap:'wrap'}}
                renderRow={(rowData) => this.eachAlbum(rowData)}
            />
    }

    render(){
        return <View style={{marginBottom:50}} >
            <TextInput 
                placeholder="相册名称"
                placeholderTextColor="#f4f4f4"
                onChangeText={(text) => this.setState({text})}
                style={{height:50,width:width,backgroundColor:'#1f232c',color:'#fff',padding:10}}
            />
            {this.renderAlbums()}
        </View>
    }
}