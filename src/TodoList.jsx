import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

export const TodoList = ({ todoList, handleDelete, toggleComplete }) => {
  return (
    <Box>
      <h1>할 일 목록</h1>
      {todoList.map((el) => (
        <TodoListItem key={el.id} id={el.id} body={el.body} handleDelete={handleDelete} toggleComplete={toggleComplete} completed={el.completed} />
      ))}
    </Box>
  );
};

const Box = styled.div`
  margin-top: 50px;
  background: #eeeeee;
  box-sizing: border-box;
  border-radius: 15px;
`;

export default TodoList;
