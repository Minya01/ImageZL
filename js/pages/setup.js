/**
 * 启动页
 */
import React,{Component} from 'react'

import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

// Navigator 在react-native 0.44已经删除
import NavigationExperimental from 'react-native-deprecated-custom-components'

import WelcomePage from './WelcomePage'

function setup(){
    // 进行初始化配置
    class Root extends Component {
        renderScene(route, navigator){
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
        }
        render(){
            return <NavigationExperimental.Navigator
                initialRoute={{component:WelcomePage}}
                renderScene={(route,navigator) => this.renderScene(route,navigator)}
            />
        }
    }

    return <Root/>;
}

export default setup;