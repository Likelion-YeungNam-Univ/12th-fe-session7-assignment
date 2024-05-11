import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoList, handleDelete, handleComplete }) => {
  return (
    <Box>
      <h1>할 일 목록</h1>
      {todoList.map((el) => {
        if (el.complete === false) {
          return (
            <TodoListItem
              handleDelete={handleDelete}
              handleComplete={handleComplete}
              key={el.id}
              id={el.id}
              body={el.body}
              complete={el.complete}
            ></TodoListItem>
          );
        } else {
          return (
            <CompleteList
              handleDelete={handleDelete}
              handleComplete={handleComplete}
              key={el.id}
              id={el.id}
              body={el.body}
              complete={el.complete}
            ></CompleteList>
          );
        }
      })}
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

const CompleteList = styled.div`
  color: gray;
  text-decoration: line-through;
`;

export default TodoList;
