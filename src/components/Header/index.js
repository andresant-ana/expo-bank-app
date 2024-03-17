import React from "react";
import { 
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
 } from "react-native";

import { Feather } from '@expo/vector-icons';
 
const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 0 : 64;

export default function Header({ name }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>{name}</Text>

                <TouchableOpacity activeOpacity={0.7} style={styles.buttonUser}>
                    <Feather name="user" size={35} color="white" />
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        paddingTop: StatusBarHeight,
        flexDirection: 'row',
        paddingStart: 20,
        paddingEnd: 20,
        paddingBottom: 70,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    username: {
        fontSize: 24,
        color: 'white',
        fontWeight: '900',
    },
    buttonUser: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
 