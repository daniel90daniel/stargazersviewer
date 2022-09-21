import React, { useState, useEffect } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  FlatList,
  TextInput,
  TouchableHighlight,
  Text,
  ActivityIndicator,
  Image
} from 'react-native';

import RenderItemStargazers from '../components/RenderItemStargazers';

import { Colors } from '../components';


const StargazersList = ({ navigation, route }) => {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

 
 useEffect(() => {
      setData([]);
      fetch(route.params.link)
      .then((response) => response.json())
      .then((json) => {
          console.log(json)
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
            <ActivityIndicator size={'small'} color={Colors.buttonText}/>
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
  sectionSearch: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.button,
    borderRadius: 20,
    height: 40,
    padding: 10,
    marginTop: 20,
    marginBottom: 10
  },
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, 
    flexDirection:'row'
  },
  buttonText: {
    color: Colors.buttonText,
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    height: 40,
    width: "90%",
    marginTop: 12,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
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
  highlight: {
    fontWeight: '700',
  },
  flatlist: {
    flex: 1, 
    width:'100%'
  }
});

export default StargazersList;
