"use client";

import { Column } from "@/components/tasks/task";
import { TaskTable } from "@/components/tasks/task-table";

export default function Component() {
  const columns: Column[] = [
    {
      label: "To do",
      tasks: [
        {
          id: 0,
          title: "0rd card",
          description: "0rd description.",
        },
        {
          id: 1,
          title: "1rd card",
          description: "1rd description.",
        },
        {
          id: 2,
          title: "2rd card",
          description: "2rd description.",
        },
        {
          id: 3,
          title: "3rd card",
          description: "3rd description.",
        },
        {
          id: 4,
          title: "4rd card",
          description: "4rd description.",
        },
      ],
    },
    {
      label: "In progress",
      tasks: [
        {
          id: 5,
          title: "Refactor the authentication flow",
          description: "Update the login and registration pages.",
        },
      ],
    },
    {
      label: "Done",
      tasks: [
        {
          id: 6,
          title: "Implement the new dashboard design",
          description: "Create the layout and integrate the new components.",
        },
        {
          id: 7,
          title: "7rd card",
          description: "7rd description.",
        },
        {
          id: 8,
          title: "8rd card",
          description: "8rd description.",
        },
      ],
    },
  ];

  return (
    <main className="flex-1 overflow-x-auto bg-muted/40 p-6">
      <TaskTable columns={columns} />
    </main>
  );
}
