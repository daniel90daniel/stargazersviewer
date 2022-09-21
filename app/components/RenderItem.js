import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator,Image } from 'react-native';
import { Colors } from './';

const RenderItem = (props) => {

    const repo = props.repo;

    const onPress = () => {
        if(repo.stargazers_count > 0)
            props.navigation.navigate('StargazersList', { link: props.repo.stargazers_url })
    }
    return (
        <TouchableOpacity style={{ width: '100%', height: 100, padding: 5}} activeOpacity={repo.stargazers_count > 0 ? 0.5 : 1} onPress={onPress}>
            <View style={{ flex:1,
                backgroundColor:'lightgrey',
                borderRadius: 10, 
                paddingLeft: 10,
                flexDirection:'row'
            }}>
                <View style={{ flex: .3, justifyContent: 'center',
                    alignItems: 'center',}}>
                    <Image
                          style={styles.icon}
                          source={{
                          uri: repo.owner.avatar_url,
                          }}
                      />
                </View>
                <View style={{ flex: .4, justifyContent: 'center'}}>
                    <Text numberOfLines={1} style={styles.sectionTitle}>{repo.name}</Text>
                    <Text numberOfLines={1} style={styles.sectionDescription}>{repo.owner.login}</Text>
                </View>
                <View style={{ flex: .3, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.stargazersTitle}>Stargazers count</Text>
                    <Text style={styles.stargazersDescription}>{repo.stargazers_count}</Text>
                </View>
                
              </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
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
    color: Colors.buttonText,
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