import PropTypes from 'prop-types';

export const TodoItem = ({ todo, onDeleteTodo }) => {
  return (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between "
    >
      <span className="align-self-center">{todo.description}</span>
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
  }).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};
