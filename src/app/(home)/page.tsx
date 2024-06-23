"use client";

import { useState } from "react";
import { TaskColumn } from "@/components/tasks/task-column";
import { Column, Task } from "@/components/tasks/task";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [columns, setColumns] = useState<Column[]>([
    {
      label: "To do",
      tasks: [
        {
          id: 1,
          title: "Finish the new landing page",
          description: "Design the layout and implement the HTML/CSS.",
        },
        {
          id: 2,
          title: "Implement the new API endpoint",
          description: "Create the backend logic and test the API.",
        },
      ],
    },
    {
      label: "In progress",
      tasks: [
        {
          id: 3,
          title: "Refactor the authentication flow",
          description: "Update the login and registration pages.",
        },
      ],
    },
    {
      label: "Done",
      tasks: [
        {
          id: 4,
          title: "Implement the new dashboard design",
          description: "Create the layout and integrate the new components.",
        },
      ],
    },
  ]);

  return (
    <main className="flex-1 overflow-x-auto bg-muted/40 p-6">
      <div className="flex flex-row gap-6">
        {columns.map((column) => (
          <TaskColumn label={column.label} tasks={column.tasks}></TaskColumn>
        ))}

        <Button variant="outline"> Add new</Button>
      </div>
    </main>
  );
}
