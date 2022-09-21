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

import { Colors, RenderItem } from '../components';

const Home = ({ navigation }) => {

  const [owner, onChangeOwner] = useState(null);
  const [repository, onChangeRepository] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const onPress = () => {
    if(data && data.length > 0)
      setData([]);

    if( !owner && !repository){
      alert('Please insert owner or name of the repository')
    }else{
      setLoading(!isLoading);
    }
  };

 useEffect(() => {
    if(isLoading){
      var query = repository ?? "";
      query = owner ? query+"user:"+owner : query;
      fetch('https://api.github.com/search/repositories?q='+encodeURIComponent(query)+'&sort=created&order=asc%27')
        .then((response) => response.json())
        .then((json) => {
            setData(json.items);
        })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    }
  }, [ isLoading ]);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={styles.sectionSearch}>

          <TextInput
            style={styles.input}
            onChangeText={onChangeOwner}
            value={owner}
            placeholder={"Insert owner"}
            placeholderTextColor = {Colors.darker}

          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeRepository}
            value={repository}
            placeholder={"Insert name of the repository"}
            placeholderTextColor = {Colors.darker}
          />
          <TouchableHighlight onPress={onPress} activeOpacity={isLoading ? 1 : 0.7} style={styles.button}>
            <View style={styles.buttonView}>
              {isLoading ? <ActivityIndicator size={'small'} color={Colors.white}/> : null}
              <Text style={styles.buttonText}>Search</Text>
            </View>
          </TouchableHighlight>
          
        </View>
        <FlatList
          style={styles.flatlist}
          data={data}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index}) => (
            <RenderItem navigation={navigation} repo={item} index={index}/>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionSearch: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.blu,
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
    flexDirection:'row',
    width: 150
  },
  buttonText: {
    color: Colors.white,
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
    backgroundColor: Colors.white,
    borderColor: Colors.darkgrey
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

export default Home;
