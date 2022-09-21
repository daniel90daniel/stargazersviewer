import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator,Image } from 'react-native';
import { Colors } from './';

const RenderItemStargazers = (props) => {

    const repo = props.repo;

    
    return (
        <View style={{ width: '100%', height: 100, padding: 5}}>
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
                          uri: repo.avatar_url,
                          }}
                      />
                </View>
                <View style={{ flex: .7, justifyContent: 'center'}}>
                    <Text numberOfLines={1} style={styles.sectionDescription}>{repo.login}</Text>
                </View>
                
              </View>
        </View>
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

export default RenderItemStargazers;