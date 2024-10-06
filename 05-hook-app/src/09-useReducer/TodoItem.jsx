import PropTypes from 'prop-types';

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between "
    >
      <span
        className={`align-self-center ${
          todo.done ? 'text-decoration-line-through' : ''
        }`}
        onClick={() => {
          onToggleTodo(todo.id);
        }}
      >
        {todo.description}
      </span>
      <button
        className="btn btn-outline-danger"
        onClick={() => onDeleteTodo(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};