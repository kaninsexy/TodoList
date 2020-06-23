import React from 'react';
import { TextField } from '@material-ui/core';
import useInputState from './useInputState';
function EditTodoForm(editTodo, id, toggleEditForm, task) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
    >
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
      ></TextField>
    </form>
  );
}
export default EditTodoForm;
