import React from 'react';
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map((todo) => {
          return (
            <div>
              <>
                <Todo
                  id={todo.id}
                  task={todo.task}
                  key={todo.id}
                  completed={todo.completed}
                  removeTodo={props.removeTodo}
                  toggleTodo={props.toggleTodo}
                  editTodo={props.editTodo}
                ></Todo>
              </>
              <Divider></Divider>
            </div>
          );
        })}
      </List>
    </Paper>
  );
}
export default TodoList;
