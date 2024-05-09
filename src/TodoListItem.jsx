import React from 'react'
import styled from 'styled-components'
import './TodoListItem.css'

const TodoListItem = ({id, body, handleDelete}) => {

  const handleComplete = (id) => {
    console.log("clicked!")
    const todoItem = document.getElementById(id);
    todoItem.classList.add("completed")
  }

  return (
    <Box id={id}>
      <p>{body}</p>
      <div>
        <Button onClick={() => handleComplete(id)}>완료</Button>
        <Button onClick={() => handleDelete(id)}>삭제</Button>
      </div>
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
  align-items : center;
`;

const Button = styled.button`
  background : none;
  border : none;
`;

export default TodoListItem