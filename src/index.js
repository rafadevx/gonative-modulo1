import './config/ReactotronConfig';
import './config/DevToolsConfig';
import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Todo from './components/Todo';

console.tron.log('Hello tron');

export default class App extends Component {
  state = {
    todos: ['Fazer Café', 'Estuda o GoNative'],
  };

  addTodo = () => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos, 'novo todo'],
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <View style={styles.container}>
        {todos.map(todo => (
          <Todo title={todo} />
        ))}
        <Button title="Adicionar todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
