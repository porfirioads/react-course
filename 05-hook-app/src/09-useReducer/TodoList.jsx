import { TodoItem } from './TodoItem';
import PropTypes from 'prop-types';

export const TodoList = ({ todos = [], onDeleteTodo }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={(id) => onDeleteTodo(id)}
          />
        ))}
      </ul>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      done: PropTypes.bool,
    }),
  ).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};
