/**
 * 欢迎页面
 */
import React,{Component} from 'react'

import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'
import HomePage from './HomePage'

export default class WelcomePage extends Component{
    // 组件加载玩后立即执行
    componentDidMount(){
        this.timer = setTimeout(()=>{
            this.props.navigator.resetTo({
                component:HomePage
            })
        },2000)
    }
    // 组件移除DOM时触发
    componentWillUnmount(){
        this.timer && clearTimeout(this.timer)
    }
    render(){
        return <View>
            <Text>欢迎</Text>
            <Image style={{width:350,height:350}} source={{uri:'https://colinbendell.cloudinary.com/image/upload/c_crop,f_auto,g_auto,h_350,w_400/v1512090971/Wizard-Clap-by-Markus-Magnusson.gif'}} />
        </View>
    }
}