import React from 'react'
import styled from 'styled-components'
import TodoListItem from './TodoListItem'

const TodoList = ({todoList, handleDelete, handleComplete}) => {
  return (
    <Box>
      <h1>할 일 목록</h1>
      {todoList.map((el) => {
        return <TodoListItem handleDelete={handleDelete} handleComplete={handleComplete} key={el.id} id={el.id} body={el.body} completed={el.completed}></TodoListItem>
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