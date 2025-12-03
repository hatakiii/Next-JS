"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useSWRConfig } from "swr";

export const Newtask = ({ status }) => {
  const [newTask, setNewTask] = useState("");
  const { mutate } = useSWRConfig();

  async function createNewTasks() {
    await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newTask }),
    });

    // loadTasks();
    mutate(`/tasks?status=${status}`);
    setNewTask("");
  }

  return (
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
  );
};
