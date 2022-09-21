import React, { useState, useEffect } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';

import { Colors, RenderItemStargazers } from '../components';

const StargazersList = ({ navigation, route }) => {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
 
  useEffect(() => {
    setData([]);
    fetch(route.params.link)
    .then((response) => response.json())
    .then((json) => {
      setData(json)
    })
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {
        isLoading ? 
        <View style={styles.viewIndicator}>
          <ActivityIndicator size={'small'} color={Colors.dark}/>
        </View> : 
        <FlatList
          style={styles.flatlist}
          data={data}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index}) => (
            <RenderItemStargazers navigation={navigation} repo={item} index={index}/>
          )}
        />
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewIndicator:{
    flex:1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatlist: {
    flex: 1, 
    width:'100%'
  }
});

export default StargazersList;
