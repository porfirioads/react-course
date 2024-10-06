import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id,
    });
  };

  return (
    <>
      <h1>
        TodoApp <small>Total: 10</small> <small>Pendientes: 10</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <h4>Mis TODOS</h4>
          <hr />
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
