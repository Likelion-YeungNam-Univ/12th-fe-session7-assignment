import styled from "styled-components";
import TodoList from "./TodoList";
import { useState } from "react";

const fake = [
  { id: 1, body: "우유 사기", completed: false },
  { id: 2, body: "공부 하기", completed: false },
  { id: 3, body: "집 가고 싶다", completed: false }
];

function App() {
  const [todoList, setTodoList] = useState(fake);
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

  const toggleComplete = (id) => {
    const updatedTodoList = todoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  return (
    <Container>
      <form onSubmit={appendTodo}>
        <TodoInput value={inputString} onChange={handleInput} />
        <button type="submit">추가</button>
      </form>
      <TodoList todoList={todoList} handleDelete={handleDelete} toggleComplete={toggleComplete} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 70%;
  height: 100vh;
  margin: auto;
`;

const TodoInput = styled.input`
  width: 100%;
  height: 32px;
  margin: 100px;
  border-radius: 10px;
`;
//upload test