import React,{Component} from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ListView
} from 'react-native'

import NavigatorBar from './NavigatorBar'

import data from './data'

export default class ListViewTest extends Component{
    constructor(props){
      super(props)
      const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
      this.state = {
        selectedTab:'home',
        dataSource:ds.cloneWithRows(data)
      }
    }

    renderRow(row){
        return <View>
            <Text>{row.registered}</Text>
            <Text>{row.email}</Text>
        </View>
    }

    renderSeparator(sectionID,rowID,adjacentRowHighlighted){
        return <View style={styles.line}></View>
    }

    renderFooter(){
        return <Image style={{width:350,height:350}} source={{uri:'https://colinbendell.cloudinary.com/image/upload/c_crop,f_auto,g_auto,h_350,w_400/v1512090971/Wizard-Clap-by-Markus-Magnusson.gif'}} />
    }

    render(){
        return (
            <View style={styles.container}>
                <NavigatorBar
                    title={'ListViewTest'}
                    style={{
                        backgroundColor:'#ffc1c1'
                    }}
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(item)=>this.renderRow(item)}
                    renderSeparator={(sectionID,rowID,adjacentRowHighlighted)=>this.renderSeparator(sectionID,rowID,adjacentRowHighlighted)}
                    renderFooter={()=>this.renderFooter()}
                 />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        // alignItems:'flex-start'
    },
    text:{
        fontSize:22
    },
    line:{
        height:1,
        backgroundColor:'gray'
    }
})
