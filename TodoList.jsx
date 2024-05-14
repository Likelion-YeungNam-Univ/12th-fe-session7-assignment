import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem'; // TodoListItem 컴포넌트 import

const TodoList2 = ({todoList, handleComplete, handleDelete}) => {
  return (
    <Box>
      <h1>할 일 목록</h1>
      {todoList.map((el) => {
        return <TodoListItem handleComplete={handleComplete} handleDelete={handleDelete} key={el.id} id={el.id} body={el.body}></TodoListItem>
      })}
    </Box>
  )
}

const Box = styled.div`
  margin-top: 50px;
  background: #eeeeee;
  padding: 50px 20px;
  box-sizing: border-box;
  border-radius: 15px;
`

export default TodoList;
