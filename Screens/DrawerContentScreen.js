import React, {Component} from 'react';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import {View, StyleSheet} from "react-native";
import { Icon } from 'react-native-elements'

export class DrawerContentScreen extends Component {

    render(){

        return(
            <View style={styles.container}>
                <DrawerContentScrollView {...this.props}>
                    <View style={styles.topDrawer}>
                        <DrawerItem 
                            icon={() => <Icon type="fontawesome" name="home" style={styles.icon}/>}
                            label="Home"
                            onPress={() => this.props.navigation.navigate("Home")}
                        />
                        <DrawerItem 
                            icon={() => <Icon type="fontawesome" name="shopping-cart" style={styles.icon}/>}
                            label="Shop"
                            onPress={() => this.props.navigation.navigate("Shop")}
                        />
                    </View>
                </DrawerContentScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    icon:{
        color:'#517fa4'
    },
    topDrawer:{
        flex:1   
    },
    bottomDrawer: {
        flex:-1,
        justifyContent: 'flex-end',
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    }
});