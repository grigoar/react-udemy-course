import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';

function App() {
  // const todos = [new Todo('Learn React'), new Todo('Learn Typescript')];
  // const [todos, setTodos] = useState<Todo[]>([]);

  // const addTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText);

  //   setTodos((prevTodos) => {
  //     return prevTodos.concat(newTodo);
  //   });
  // };

  // const removeTodoHandler = (todoId: string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter((todo) => todo.id !== todoId);
  //   });
  // };

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
      {/* <Todos items={['Learn React', 'Learn Typescript']} /> */}
    </TodosContextProvider>
  );
}
//   return (
//     <div>
//       <NewTodo onAddTodo={addTodoHandler} />
//       <Todos onRemoveTodo={removeTodoHandler} items={todos} />
//       {/* <Todos items={['Learn React', 'Learn Typescript']} /> */}
//     </div>
//   );
// }

export default App;
