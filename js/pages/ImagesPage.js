/**
 * 照片列表
 */
import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  Dimensions,
  ListView,
  TouchableOpacity,
  CameraRoll,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

var {height, width} = Dimensions.get('window');

const ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 != r2});

export default class ImagesPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            modalVisible:false,
            photos:[],
            index:null,
            dataSource:ds.cloneWithRows(this.props.albums)
        }
    }
    showPhotos(rowData){
        let uri = rowData.node.image.uri;
        if(uri){
            return <View>
                    <Image 
                    style={{width:100,height:100,margin:10}}
                    source={{ uri: uri }}
                    />
            </View>
        }
        return <View></View>
       
    }
    getPhotos(){
        CameraRoll.getPhotos({
            first:20,
            assetType:'All'
        })
        .then(r => {
            this.setState({
                photos:r.edges
            })

            if(r.edges){
                this.setState({
                    dataSource:ds.cloneWithRows(r.edges)
                })
            }
        })
    }
    render(){
        let {navigator} = this.props;
        return <View style={{width:width,height:height}} >
            <View style={{height:50,backgroundColor:'#fff',borderBottomColor:'#ccc',borderBottomWidth:1,flexDirection: 'row'}}>
                <View style={{width:40,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity onPress={navigator.pop}>
                        <Icon name="angle-left" size={22} color="#666" />
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#444',fontSize:18}} >{this.props.albumName}</Text>
                </View>
            </View>


            <View>
                <ListView 
                    contentContainerStyle={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.showPhotos(rowData)}
                    enableEmptySections={true}
                />
            </View>

            <ScrollView>
                {this.state.photos.map((p, i) => {
                return (
                    <Image
                    key={i}
                    style={{
                        width: 100,
                        height: 100,
                    }}
                    source={{ uri: p.node.image.uri }}
                    />
                );
                })}
            </ScrollView>

            
            <TouchableOpacity 
                style={{width:60, borderWidth:3, borderColor:'rgba(0,0,0,0.2)', alignItems:'center', justifyContent:'center', height:60, backgroundColor:'#ff585b', borderRadius:30, position:'absolute', bottom:70, right:20,zIndex:99}}
                onPress={()=>{
                    this.getPhotos()
                }}
                >
                <Icon name="search-plus" size={22} color="#fff"/>
            </TouchableOpacity>
        </View>
    }
}