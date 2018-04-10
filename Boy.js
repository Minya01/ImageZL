import React,{Component} from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import Girl from './Girl'
import NavigatorBar from './NavigatorBar'

export default class Boy extends Component{
    constructor(props){
        super(props)
        this.state = {
            word:''
        }
    }

    render(){
        return (
            <View style={styles.container} >
                <NavigatorBar
                    title={'BOY'}
                    statusBar={{
                        backgroundColor:'green'
                    }}
                />
                <Text style={styles.text}>I am Boy</Text>
                <Text style={styles.text}
                    onPress={()=>{
                        this.props.navigator.push({
                            component:Girl,
                            params:{
                                word:'一枝玫瑰',
                                onCallback:(word)=>{
                                    this.setState({
                                        word:word
                                    })
                                }
                            }
                        })
                    }}
                >送女孩一枝玫瑰</Text>
                <Text style={styles.text}>{this.state.word}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container:{
       flex:1,
       backgroundColor:'#fff',
       justifyContent:'center'
   },
   text:{
        fontSize:20
   }
})
