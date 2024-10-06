import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la gema del alma',
    done: false,
  },
  {
    id: new Date().getTime() + 100,
    description: 'Recolectar la gema del poder',
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    };

    dispatch(action);
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
          <TodoList todos={todos} />
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
