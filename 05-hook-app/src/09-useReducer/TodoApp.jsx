import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

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
    console.log(todo);
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

          {/* TodoList */}
          <ul className="list-group">
            {todos.map((todo) => (
              // TodoItem
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between "
              >
                <span className="align-self-center">{todo.description}</span>
                <button className="btn btn-outline-danger">Borrar</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/* TodoAdd onNewTodo(todo)*/}
          <form>
            <input
              type="text"
              placeholder="¿Qué hay que hacer?"
              className="form-control"
            />
            <button type="submit" className="btn btn-outline-primary mt-2">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
