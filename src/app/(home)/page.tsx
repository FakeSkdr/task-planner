"use client";

import { useState } from "react";
import { TaskColumn } from "@/components/tasks/task-column";
import { Task } from "@/components/tasks/task";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Finish the new landing page",
      description: "Design the layout and implement the HTML/CSS.",
      column: "todo",
    },
    {
      id: 2,
      title: "Implement the new API endpoint",
      description: "Create the backend logic and test the API.",
      column: "todo",
    },
    {
      id: 3,
      title: "Refactor the authentication flow",
      description: "Update the login and registration pages.",
      column: "in-progress",
    },
    {
      id: 4,
      title: "Implement the new dashboard design",
      description: "Create the layout and integrate the new components.",
      column: "done",
    },
  ]);

  const [draggedTask, setDraggedTask] = useState<Task | null>(null);
  const handleDragStart = (task: Task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = (column: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === draggedTask?.id ? { ...task, column } : task,
      ),
    );
    setDraggedTask(null);
  };

  return (
    <main className="flex-1 overflow-x-auto bg-muted/40 p-6">
      <div className="flex flex-row gap-6">
        <TaskColumn
          label="todo"
          tasks={tasks.filter((task) => task.column === "todo")}
          onTaskDragOver={handleDragOver}
          onTaskDragStart={handleDragStart}
          onTaskDrop={(label) => handleDrop(label)}
        ></TaskColumn>
        <TaskColumn
          label="in-progress"
          tasks={tasks.filter((task) => task.column === "in-progress")}
          onTaskDragOver={handleDragOver}
          onTaskDragStart={handleDragStart}
          onTaskDrop={(label) => handleDrop(label)}
        ></TaskColumn>
        <TaskColumn
          label="done"
          tasks={tasks.filter((task) => task.column === "done")}
          onTaskDragOver={handleDragOver}
          onTaskDragStart={handleDragStart}
          onTaskDrop={(label) => handleDrop(label)}
        ></TaskColumn>
        <Button variant="outline"> Add new</Button>
      </div>
    </main>
  );
}
