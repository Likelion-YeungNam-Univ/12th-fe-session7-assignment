import React from 'react'
import styled from 'styled-components'

const TodoListItem = ({id, body, handleDelete}) => {



  return (
    <Box>
      <p>{body}</p>
      <button onClick={() => {handleDelete(id)}}>삭제</button>
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

export default TodoListItem