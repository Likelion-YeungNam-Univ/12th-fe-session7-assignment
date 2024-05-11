import React from 'react'
import styled from 'styled-components'
import TodoListItem from './TodoListItem'

const TodoList = ({todoList, handleComplete,handleDelete}) => {
  return (
    <Box>
      <h1>할 일 목록</h1>
      {todoList.map((el) => {
        return <TodoListItem handleComplete={handleComplete} handleDelete={handleDelete} key={el.id} id={el.id} body={el.body} style={el.style}></TodoListItem>
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

export default TodoList