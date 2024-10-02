const initialState = [
  {
    id: 1,
    todo: 'Recolectar la gema del alma',
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === '[TODO] add todo') {
    // A reducer always must return a new state.
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Recolectar la gema del tiempo',
  done: false,
};

const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
