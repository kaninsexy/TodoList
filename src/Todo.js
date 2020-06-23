import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useToggleState from './useToggleState';
function Todo(props) {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem>
      {isEditing ? (
        <h1>Edit</h1>
      ) : (
        <>
          <Checkbox
            color='secondary'
            tabIndex={-1}
            checked={props.completed}
            onClick={() => {
              props.toggleTodo(props.id);
            }}
          ></Checkbox>
          <ListItemText
            style={{
              textDecoration: props.completed ? 'line-through' : 'none',
            }}
          >
            {props.task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton>
              <DeleteIcon
                aria-label='Delete'
                onClick={() => props.removeTodo(props.id)}
              ></DeleteIcon>
            </IconButton>
            <IconButton>
              <EditIcon aria-label='Edit'></EditIcon>
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
export default Todo;
