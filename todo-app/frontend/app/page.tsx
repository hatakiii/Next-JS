"use client";

import { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import useSWR, { useSWRConfig } from "swr";

import { Newtask } from "./Newtask";
type TaskType = { id: string; name: string; isCompleted: boolean };

export async function fetcher(path: string) {
  const data = await fetch(`http://localhost:3000${path}`).then((res) =>
    res.json()
  );
  return data;
}

export default function Home() {
  // const [tasks, setTasks] = useState<TaskType[]>([]);
  const [status, setStatus] = useState("All");

  const { data: tasks, isLoading } = useSWR(`/tasks?status=${status}`, fetcher);

  // useEffect(() => {
  //   loadTasks();
  // }, [status]);

  // function loadTasks() {
  //   fetch(`http://localhost:3000/tasks?status=${status}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTasks(data);
  //     });
  // }

  async function deleteTask(id: string) {
    if (confirm("Are you sure?")) {
      //delete
      await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
      });
      // loadTasks();
    }
  }

  async function toggleCompleted(id: string) {
    await fetch(`http://localhost:3000/tasks/${id}/check`, {
      method: "PATCH",
    });
    // loadTasks();
  }

  async function editTask(task: TaskType) {
    const newName = prompt("Засах утгаа оруулна уу.", task.name);
    if (newName) {
      await fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newName }),
      });
      // loadTasks();
    }
  }

  // const filteredTasks = tasks.filter((task) => {
  //   if (status === "All") {
  //     return true;
  //   } else if (status === "Active") {
  //     return !task.isCompleted;
  //   } else {
  //     return task.isCompleted;
  //   }
  // });
  if (isLoading) return <div className="text-center py-12">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <Newtask status={status} />

      <div role="tablist" className="tabs tabs-box mt-4">
        {["All", "Active", "Completed"].map((x) => (
          <a
            role="tab"
            key={x}
            onClick={() => setStatus(x)}
            className={`tab flex-1 ${status === x ? "tab-active" : ""}`}
          >
            {x}
          </a>
        ))}
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
                <input
                  onChange={() => toggleCompleted(task.id)}
                  defaultChecked={task.isCompleted}
                  type="checkbox"
                  className="checkbox checkbox-success"
                />

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
