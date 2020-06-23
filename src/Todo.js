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
function Todo(props) {
  return (
    <ListItem>
      <Checkbox
        color='secondary'
        tabInd
        ex={-1}
        checked={props.completed}
      ></Checkbox>
      <ListItemText
        style={{ textDecoration: props.completed ? 'line-through' : 'none' }}
      >
        {props.task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton>
          <DeleteIcon
            aria-label='Delete'
            onClick={() => {
              removeTodo(props.id);
            }}
          ></DeleteIcon>
        </IconButton>
        <IconButton>
          <EditIcon aria-label='Edit'></EditIcon>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
export default Todo;
