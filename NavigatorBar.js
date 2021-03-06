import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View,
    StatusBar,
    ViewPropTypes
} from 'react-native';

import PropTypes from 'prop-types'

const NAV_BAR_HEIGHT_ANDROID = 50;
const NAV_BAR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20;
const StatusBarShape = {
    backgroundColor: PropTypes.string,
    barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content']),
    hidden: PropTypes.bool
}

export default class NavigatorBar extends Component {
    static propTypes = {
        style: ViewPropTypes.style,
        title: PropTypes.string,
        titleView: PropTypes.element,
        hide: PropTypes.bool,
        leftButton: PropTypes.element,
        rightButton: PropTypes.element,
        statusBar: PropTypes.shape(StatusBarShape)
    }
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            hide: false
        }
    }
    static defaultProps = {
        statusBar: {
            // barStyle: 'light-content',
            // hide: false
        }
    }
    render() {
        let status = <View style={[styles.statusBar, this.props.statusBar]}>
            <StatusBar {...this.props.statusBar}/>
        </View>
        let titleView = this.props.titleView
            ? this.props.titleView
            : <Text style={styles.title}>{this.props.title}</Text>
        let content = <View style={[styles.navBar,this.props.style]}>
            {this.props.leftButton}
            <View style={styles.titleViewContainer}>{titleView}</View>
            {this.props.rightButton}
        </View>

        return (
            <View style={styles.container}>
                {status}
                {content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray'
    },
    navBar: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Platform.OS === 'ios'
            ? NAV_BAR_HEIGHT_IOS
            : NAV_BAR_HEIGHT_ANDROID,
        backgroundColor: 'red',
        flexDirection: 'row'
    },
    titleViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 40,
        right: 40,
        top: 0,
        bottom: 0
    },
    title: {
        fontSize: 20,
        color: '#fff'
    },
    statusBar: {
        height: Platform.OS === 'ios'
            ? STATUS_BAR_HEIGHT
            : 0
    }

})
