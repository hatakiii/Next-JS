export const TodoRow = ({ todo, handleCheck, setTodos }) => {
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <div className="flex gap-2 bg-zinc-300 text-black w-fit">
      <input
        checked={todo.isDone}
        onChange={() => handleCheck(todo.id)}
        type="checkbox"
        name=""
        id=""
      />
      <p className={todo.isDone ? "line-through" : ""}>{todo.text}</p>
      {todo.isDone && (
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
      )}
    </div>
  );
};
