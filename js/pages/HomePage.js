/**
 * 主页
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import AlbumsPage from './AlbumsPage'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class HomePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedTab:'home'
    }
  }
  render() {
    let {navigator} = this.props;
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="相册"
            selectedTitleStyle={{color:'red'}}
            renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_polular.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('../../res/images/ic_polular.png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <AlbumsPage navigator={navigator}/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="我"
            selectedTitleStyle={{color:'#00CCCC'}}
            renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_favorite.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#00CCCC'}]} source={require('../../res/images/ic_favorite.png')} />}
            onPress={() => this.setState({ selectedTab: 'profile' })}>
           <View style={styles.page2}></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  page1:{
    flex: 1,
    backgroundColor:'#ffffff'
  },
  page2:{
    flex: 1,
    backgroundColor:'yellow'
  },
  image:{
    height:22,
    width:22
  }
});