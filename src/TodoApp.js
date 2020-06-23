import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
function TodoApp() {
  const testTodos = [
    { id: 1, task: 'Sleep', completed: true },
    { id: 2, task: 'Wake Up', completed: false },
  ];
  const [todos, setTodos] = useState(testTodos);
  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: 3, task: newTodoText, completed: true }]);
  };
  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>Todo List</Typography>
        </Toolbar>
      </AppBar>

      <Grid container justify='center' style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo}></TodoForm>
          <TodoList todos={todos} removeTodo={removeTodo}></TodoList>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default TodoApp;