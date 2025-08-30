export const TodoRow = ({ todo }) => {
  return (
    <div className="flex gap-2 bg-zinc-300 text-black w-fit">
      <input type="checkbox" name="" id="" />
      <p>{todo.text}</p>
      {todo.isDone && <button>Delete</button>}
    </div>
  );
};
