/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList
} from 'react-native';
import { uuid } from 'uuidv4';
import Lists from './components/features/Lists';
import Header from './components/shareable/header';


const App = () => {

  const [items , setItems] = useState([
    {id:1 , text:'Milk'},
    {id:2 , text:'Bread'},
    {id:3 , text:'Juice'},
    {id:4 , text:'Egg'}
  ]);

  return (
    <SafeAreaView >
      <Header title="Shopping List"/>
      <FlatList
        data={items}
        renderItem={({item})=>(
          <Lists 
            item={item}
          />
        )}
      />
    </SafeAreaView>
  );
};



export default App;
