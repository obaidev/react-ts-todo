import { useState } from "react";
interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}
export default function AddTodoForm({onSubmit}:AddTodoFormProps ) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;
    onSubmit(input);
    setInput("");

   
    }

  const [input,setInput] = useState("")
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
      value={input}
      onChange={(e)=>setInput(e.target.value)}
        placeholder="What needs to be done?"
        className="
          rounded-l-md p-2 flex-grow bg-gray-200 border border-gray-400
          hover:border-gray-500 focus:outline-none focus:border-gray-300
          transition-colors duration-200
        "
      />
      <button
        type="submit"
        className="
          bg-slate-900 hover:bg-slate-700 text-white p-2 w-16
          rounded-r-md transition-colors duration-200
        "
      >
        Add
      </button>
    </form>
  );
}
