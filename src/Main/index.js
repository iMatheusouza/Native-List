<script src="http://localhost:8097"></script>
import React, { Component } from 'react'
import { View, Text, TextInput, Button, SectionList } from 'react-native'
import { styles } from './styles'  

class Main extends Component {

  state = {
    userInput: '',
    items: []
  }

  onSubmit = () => {
    this.setState({items: [...this.state.items, this.state.userInput], userInput: ''})
  } 

  render(){
    return <View style={styles.container}>
      <TextInput 
        style={styles.inputField}
        value={this.state.userInput}
        onChangeText={text => this.setState({userInput: text})}
        />
      <Button onPress={this.onSubmit} title='Adicionar tarefa'/>
      {console.log(this.state.items)}
      
      {/* <Text style={styles.textList}>{this.state.items.map(items => items)}</Text> */}
      <SectionList
        data={this.state.items}
        renderItem={({item}) => this.state.items.map(item => <Text>{item}</Text>)}
      />
      
      
    </View>
  }
}

export default Main