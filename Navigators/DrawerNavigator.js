import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContentScreen} from "../Screens/DrawerContentScreen";

// Navigators
import {TabsNavigator} from "./TabsNavigator";

// Screens
import {HomeScreen} from "../Screens/HomeScreen";



const Drawer = createDrawerNavigator();

export class DrawerNavigator extends Component {

    render(){
        return(
            <Drawer.Navigator 
                initialRouteName="Home"
                headerMode={'none'}
                drawerContent={props => <DrawerContentScreen {...props}/>}
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Shop" component={TabsNavigator} />
            </Drawer.Navigator>
        );
    }
    
}