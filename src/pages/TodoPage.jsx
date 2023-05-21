import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState } from 'react';

const dummyTodos = [
  {
    title: 'Learn react-router',
    isDone: true,
    id: 1,
  },
  {
    title: 'Learn to create custom hooks',
    isDone: false,
    id: 2,
  },
  {
    title: 'Learn to use context',
    isDone: true,
    id: 3,
  },
  {
    title: 'Learn to implement auth',
    isDone: false,
    id: 4,
  },
];

const TodoPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(dummyTodos);

  const handleInput = (value) => {
    setInputValue(value);
  };

  const handleTodo = () => {
    if (inputValue.length === 0) {
      return;
    }
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random() * 100,
          title: inputValue,
          isDone: false,
        },
      ];
    });
    setInputValue(' ');
  };

  const handleKeyDown = () => {
    if (inputValue.length === 0) {
      return;
    }
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random() * 100,
          title: inputValue,
          isDone: false,
        },
      ];
    });
    setInputValue(' ');
  };

  const handleToggleDone = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        } else return todo;
      });
    });
  };

  const handleChangeMode = ({ id, isEdit }) => {
    setTodos((preTodos) => {
      return preTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEdit };
        } else return { ...todo, isEdit: false };
      });
    });
  };
  const handleSave = ({ id, title }) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title, isEdit: false };
        } else return todo;
      });
    });
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => id !== todo.id);
    });
  };
  return (
    <div>
      TodoPage
      <Header />
      <TodoInput
        inputValue={inputValue}
        onChange={handleInput}
        onAddTodo={handleTodo}
        onKeyDown={handleKeyDown}
      />
      <TodoCollection
        todos={todos}
        onToggleDone={handleToggleDone}
        onChangeMode={handleChangeMode}
        onSave={handleSave}
        onDelete={handleDelete}
      />
      <Footer todoLength={todos.length} />
    </div>
  );
};

export default TodoPage;
