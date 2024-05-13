import React from 'react'
import styled from 'styled-components'

const TodoListItem = ({id, body,completed, handleDelete, handleComplete}) => {

  return (
    <Box>
      <Text complete={completed}>{body}</Text>
      <Button>
        <button onClick={() => {handleComplete(id)}}>완료</button>
        <button onClick={() => {handleDelete(id)}}>삭제</button>
      </Button>
    </Box>
  )
}

const Box = styled.div`
  background-color: white;
  padding: 5px 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 15px;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`
const Button = styled.div`
  display: flex;
  gap: 5px;
`

const Text = styled.p`
  text-decoration: ${props => props.complete ? "line-through" : "none"};
  color:${props=>props.complete? "gray":"black"};
`

export default TodoListItem