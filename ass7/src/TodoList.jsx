import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoList, handleDelete, handleComplete }) => {
  return (
    <Box>
      <h1>할 일 목록</h1>
      {todoList.map((item) => (
        <TodoListItem
          key={item.id}
          id={item.id}
          body={item.body}
          completed={item.completed}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      ))}
    </Box>
  );
};

const Box = styled.div`
  margin-top: 50px;
  background: #eeeeee;
  padding: 50px 20px;
  box-sizing: border-box;
  border-radius: 15px;
`;

export default TodoList;
