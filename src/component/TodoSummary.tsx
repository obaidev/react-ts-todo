import type { Todo } from "../types/todo";

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompleted: () => void;
}

export default function TodoSummary({
  todos,
  deleteAllCompleted,
}: TodoSummaryProps) {
  const todoCompleted = todos.filter((todos) => todos.completed);

  return (
    <div className="text-center pt-6">
      <p className="text-sm font-medium">
        {todoCompleted.length} / {todos.length} todos Completed
      </p>
      {todoCompleted.length > 0 && (
        <button
          className="text-red-500 hover:underline text-sm font-medium"
          onClick={deleteAllCompleted}
        >
          Delele All Complete
        </button>
      )}
    </div>
  );
}
