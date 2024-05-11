import React from 'react';
import styled from 'styled-components';

const TodoListItem = ({ id, body, complete, handleDelete, handleComplete }) => {
  return (
    <Box>
      {complete === false ? <p>{body}</p> : <IsCompleted>{body}</IsCompleted>}
      <ButtonBox>
        <button
          onClick={() => {
            handleDelete(id);
          }}
        >
          삭제
        </button>
        <button
          onClick={() => {
            handleComplete(id);
          }}
        >
          완료
        </button>
      </ButtonBox>
    </Box>
  );
};

const Box = styled.div`
  background-color: white;
  padding: 5px 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 15px;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;
const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

const IsCompleted = styled.p`
  color: gray;
  text-decoration: line-through;
`;

export default TodoListItem;
