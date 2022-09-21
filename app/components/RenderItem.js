import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,Image } from 'react-native';
import Colors from './Colors';

const RenderItem = (props) => {

    const repo = props.repo;

    const onPress = () => {
        if(repo.stargazers_count > 0)
            props.navigation.navigate('StargazersList', { link: props.repo.stargazers_url })
    }
    return (
        <TouchableOpacity style={styles.rowTouch} activeOpacity={repo.stargazers_count > 0 ? 0.5 : 1} onPress={onPress}>
            <View style={styles.row}>
                <View style={styles.viewIcon}>
                    <Image
                          style={styles.icon}
                          source={{
                          uri: repo.owner.avatar_url,
                          }}
                      />
                </View>
                <View style={styles.rowDesc}>
                    <Text numberOfLines={1} style={styles.sectionTitle}>{repo.name}</Text>
                    <Text numberOfLines={1} style={styles.sectionDescription}>{repo.owner.login}</Text>
                </View>
                <View style={styles.rowStarCount}>
                    <Text style={styles.stargazersTitle}>Stargazers count</Text>
                    <Text style={styles.stargazersDescription}>{repo.stargazers_count}</Text>
                </View>
                
              </View>
        </TouchableOpacity>
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
        flex: .4, 
        justifyContent: 'center'
    },
    rowStarCount:{
        flex: .3, 
        justifyContent: 'center', 
        alignItems: 'center'
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
    sectionTitle: {
        fontSize: 17,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 3,
        fontSize: 15,
        fontWeight: '400',
        color: Colors.blu,
    },
    stargazersTitle: {
          fontSize: 8,
    },
    stargazersDescription: {
        marginTop: 3,
        fontSize: 15,
        fontWeight: '400',
    },
});

export default RenderItem;