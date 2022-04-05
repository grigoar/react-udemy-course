import React, { useContext } from 'react';
// import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';
import { TodosContext } from '../store/todos-context';

// const Todos: React.FC<{ items: string[] }> = (props) => {
// const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
//   props
// ) => {
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          text={item.text}
          key={item.id}
        ></TodoItem>
        // <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
//   return (
//     <ul className={classes.todos}>
//       {props.items.map((item) => (
//         <TodoItem
//           onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
//           text={item.text}
//           key={item.id}
//         ></TodoItem>
//         // <li key={item.id}>{item.text}</li>
//       ))}
//     </ul>
//   );
// };

// export default Todos;
