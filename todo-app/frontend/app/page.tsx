"use client";

import { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

export default function Home() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<{ id: string; name: string }[]>([]);

  async function createNewTasks() {
    await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newTask }),
    });

    loadTasks();
    setNewTask("");
  }

  function loadTasks() {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }

  async function deleteTask(id: string) {
    if (confirm("Are you sure?")) {
      //delete
      await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
      });
      loadTasks();
    }
  }

  async function editTask(task: { id: string; name: string }) {
    const newName = prompt("Засах утгаа оруулна уу.", task.name);
    if (newName) {
      await fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newName }),
      });
      loadTasks();
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      {/* Input Field + Add Button */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Enter a new task..."
          className="input input-bordered w-full"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="btn btn-accent gap-2"
          disabled={!newTask}
          onClick={createNewTasks}
        >
          <FaPlus />
          Add
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {tasks.length === 0 ? (
          <div className="text-center text-gray-500">
            No tasks yet. Start by adding one!
          </div>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="card bg-base-200 shadow-md border border-base-300"
            >
              <div className="card-body p-4 flex flex-row items-center justify-between">
                <p className="text-base text-base-content">{task.name}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => editTask(task)}
                    className="btn btn-sm btn-outline btn-info gap-1"
                  >
                    <FaEdit />
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="btn btn-sm btn-outline btn-error gap-1"
                  >
                    <FaTrash />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
