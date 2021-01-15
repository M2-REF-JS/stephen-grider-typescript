import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

const _App = (props: AppProps) => {
  // const dispatch = useDispatch();

  useEffect(() => {
    if (props.todos.length > 0) {
      setIsLoading(false);
    }
  }, [props.todos.length]);

  const [isLoading, setIsLoading] = useState(false);

  const renderList = (): JSX.Element[] => {
    return props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  };

  const onButtonClick = (): void => {
    props.fetchTodos();
    setIsLoading(true);
  };

  const onTodoClick = (id: number): void => {
    props.deleteTodo(id);
  };

  return (
    <div>
      <button onClick={onButtonClick}>Fetch</button>
      {isLoading ? 'LOADING' : null}
      {renderList()}
    </div>
  );
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return {
    todos,
  };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
