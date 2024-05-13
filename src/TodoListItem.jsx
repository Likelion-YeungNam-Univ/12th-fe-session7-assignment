import React from "react";
import styled from "styled-components";

const TodoListItem = ({ id, body,complete, handleComplete, handleDelete }) => {
  return (
    <Box complete={complete}>
      <p>{body}</p>
      <div>
        <button
          onClick={() => {
            handleComplete(id);
          }}
        >
          완료
        </button>
        <button
          onClick={() => {
            handleDelete(id);
          }}
        >
          삭제
        </button>
      </div>
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

  //완료 버튼 눌렀을 때
  text-decoration: ${props => props.complete ? "line-through" : "none"};
  color:${props=>props.complete? "grey":"black"};
`;

export default TodoListItem;
