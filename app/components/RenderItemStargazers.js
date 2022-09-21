import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Colors from './Colors';

const RenderItemStargazers = (props) => {

    const repo = props.repo;
    
    return (
        <View style={styles.rowTouch}>
            <View style={styles.row}>
                <View style={styles.viewIcon}>
                    <Image
                          style={styles.icon}
                          source={{
                          uri: repo.avatar_url,
                          }}
                      />
                </View>
                <View style={styles.rowDesc}>
                    <Text numberOfLines={1} style={styles.sectionDescription}>{repo.login}</Text>
                </View>
                
              </View>
        </View>
    )
};

const styles = StyleSheet.create({
    rowTouch: {
        width: '100%', 
        height: 100, 
        padding: 5
    },
    row: {
        flex:1,
        backgroundColor: Colors.darkgrey,
        borderRadius: 10, 
        paddingLeft: 10,
        flexDirection:'row'
    },
    rowDesc: {
        flex: .7, 
        justifyContent: 'center'
    },
    viewIcon: {
        flex: .3, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        height: 70, 
        width: 70,
        borderRadius: 35
    },
    sectionDescription: {
        marginTop: 3,
        fontSize: 15,
        fontWeight: '400',
        color: Colors.blu,
    },
});

export default RenderItemStargazers;