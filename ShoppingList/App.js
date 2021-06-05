import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'


const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: "Milk"},
    {id: 2, text: "Eggs"},
    {id: 3, text: "Bread"},
    {id: 4, text: "Juice"}
  ])

  const deleteItem = (id) => {
    setItems(prevItem => {
      return prevItem.filter(item => item.id != id)
    })
  }

  const addItem = (text) => {
    if (text == "") {
      Alert.alert('Error', 'Please enter some text', [
        { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: true });
    } else {
      setItems(prevItem => {
        return [{id: Math.floor(Math.random() * 1000000), text}, ...prevItem]
      })
    }

    
  }
  
  return (
    <View style = {styles.container}>
      <Header/>
      <AddItem addItem = {addItem}/>
      <FlatList data = {items}
       renderItem = {({item}) => <ListItem item = {item} deleteItem={deleteItem}/>}
       />

      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
})

export default App