/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import NavigationExperimental from 'react-native-deprecated-custom-components'

import TabNavigator from 'react-native-tab-navigator';

import Boy from './Boy'
import ListViewTest from './ListViewTest'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedTab:'home'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="主页"
            selectedTitleStyle={{color:'red'}}
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_polular.png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="我"
            selectedTitleStyle={{color:'#00CCCC'}}
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_favorite.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#00CCCC'}]} source={require('./res/images/ic_favorite.png')} />}
            onPress={() => this.setState({ selectedTab: 'profile' })}>
           <View style={styles.page2}></View>
          </TabNavigator.Item>
        </TabNavigator> */}
        {/* <NavigationExperimental.Navigator
          initialRoute = {{
            component:Boy
          }}
          renderScene={(router,navigator) => {
            let Component = router.component;
            return <Component navigator={navigator} {...router.params} />
          }}
        /> */}
        <ListViewTest />
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
    backgroundColor:'#f30'
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
