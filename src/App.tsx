import AddTodoForm from "./component/AddTodoForm";
import TodoList from "./component/TodoList";
import TodoSummary from "./component/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {
  const {
    todos,
    addTodo,
    deleteTodo,
    setTodoCompleted,
    deleteAllCompletedTodo,
  } = useTodos();

  return (
    <main className="py-10 h-screen overflow-auto">
      <h1 className="font-bold text-3xl text-center mb-6">Your Todos List</h1>
      <div className="max-w-md mx-auto space-y-6 bg-gray-100 p-6 rounded-lg ">
        <AddTodoForm onSubmit={addTodo} />

        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompletedTodo} />
    </main>
  );
}

export default App;
