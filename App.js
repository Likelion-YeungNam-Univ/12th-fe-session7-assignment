
import React, { useState } from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import TodoListItem from "./TodoListItem"; // TodoListItem 컴포넌트 import


const initialTodos = [
  {
    id: 1,
    body: "우유 사기",
    completed: false,
  },
  {
    id: 2,
    body: "공부하기",
    completed: false,
  },
  {
    id: 3,
    body: "집가고싶다",
    completed: false,
  }
];


function App() {

  const [todoList, setTodoList] = useState(initialTodos);
  const [inputString, setInputString] = useState("");


  const appendTodo = (event) => {
    event.preventDefault();
    const newTodo = [...todoList, { id: Date.now(), body: inputString, completed: false }];
    setTodoList(newTodo);
    setInputString('');
  };


  const handleInput = (event) => {
    setInputString(event.target.value);
  };


  const handleDelete = (id) => {
    const newTodo = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodo);
  };


  const handleComplete = (id) => {
    const newTodo = todoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodoList(newTodo);
  };


  return (
    <Container>
      <form onSubmit={appendTodo}>
        <TodoInput onChange={handleInput} value={inputString} placeholder="할 일을 입력하세요"></TodoInput>
      </form>
      <TodoList todoList={todoList} handleDelete={handleDelete} handleComplete={handleComplete}></TodoList>
      <TodoList2 todoList={todoList} handleDelete={handleDelete} handleComplete={handleComplete}></TodoList2> {/* TodoList2 컴포넌트 */}
    </Container>
  );
}

const Container = styled.div`
  width: 70%;
  height: 100vh;
  margin: auto;
`;

const TodoInput = styled.input`
  width: 100%;
  margin-top: 20px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 0 10px;
  box-sizing: border-box;
`;

export default App;