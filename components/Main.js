import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions/index';

const Tab = createBottomTabNavigator();

export class Main extends Component {
    componentDidMount(){
            this.props.fetchUser();
    }
    render() {
                
        return (
            
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
            
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators(
    { fetchUser }, dispatch
);

export default connect(mapStateToProps, mapDispatchProps)(Main);
