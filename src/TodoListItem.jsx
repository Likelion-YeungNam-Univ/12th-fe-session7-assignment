import React from 'react'
import styled from 'styled-components'
import { useState } from "react";

const TodoListItem = ({id, body, handleDelete}) => {
  
  // 완료버튼 상태 관리
  const [todoComplete, setComplete] = useState(false)

  // 완료버튼 클릭시 실행시 todoComplete값을 false에서 true로 변경
  const handleComplete= () => {
    setComplete(true)
  }
  
  return (
    <Box>
      {/* todoComplete 값이 false 일때는 NotCompleted 컴포넌트,
      true일때는 Completed 컴포넌트로 지정 */}
      {todoComplete===false 
      ? <NotCompleted>{body}</NotCompleted>
      : <Completed>{body}</Completed>
      }

      <div>
        {/* 완료 버튼 클릭 시 handleComplete() 실행 */}
        <button onClick={() => {handleComplete()}}>완료</button>
        <button onClick={() => {handleDelete(id)}}>삭제</button>
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
`
// 기본으로 지정된 컴포넌트
const NotCompleted=styled.p`
  color: black;
`
// 완료버튼 클릭시 대체되는 컴포넌트
const Completed=styled.p`
  color: gray;
  text-decoration: line-through;
`

export default TodoListItem