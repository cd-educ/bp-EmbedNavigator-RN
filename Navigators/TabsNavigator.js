import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import {Icon} from "react-native-elements";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import {ItemsScreen} from "../Screens/ItemsScreen";
import {CartScreen} from "../Screens/CartScreen";

const Tab = createBottomTabNavigator();

export class TabsNavigator extends Component{
    render(){
        return(
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen
                    name="Items"
                    component={ItemsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon type="fontawesome" name="list" color={color} size={size} />
                            ),
                    }}
                />
                <Tab.Screen
                    name="Cart"
                    component={CartScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon type="fontawesome" name="shopping-cart" color={color} size={size} />
                            ),
                    }}
                />
            </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});