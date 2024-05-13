import styled from "styled-components";
import TodoList from "./TodoList";
import { useState } from "react";

const fake = [
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
  },
];

function App() {
  const [todoList, setTodoList] = useState(fake);
  const [inputString, setInputString] = useState("");

  const appendTodo = (event) => {
    event.preventDefault();
    const new_Todo = [...todoList, { id: Date.now(), body: inputString,completed:false }];
    setTodoList(new_Todo);
    setInputString("");
  };

  const handleInput = (event) => {
    setInputString(event.target.value);
  };

  const handleDelete = (id) => {
    const new_Todo = todoList.filter((el) => {
      if (el.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setTodoList(new_Todo);
  };
  const handleComplete = (id) => {
    const new_Todo = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodoList(new_Todo);
  };

  return (
    <Container>
      <form onSubmit={appendTodo}>
        <TodoInput onChange={handleInput} value={inputString}></TodoInput>
      </form>
      <TodoList
        todoList={todoList}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
        
      ></TodoList>
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
  margin-top: 100px;
  height: 32px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  box-sizing: border-box;
`;

export default App;
