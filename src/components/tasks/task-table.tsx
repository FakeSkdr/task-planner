import { TaskColumn } from "@/components/tasks/task-column";
import { Button } from "@/components/ui/button";
import { Column } from "./task";

interface TaskTableProps {
  columns: Column[];
}

export function TaskTable({ columns }: TaskTableProps) {
  return (
    <div className="flex flex-row gap-6">
      {columns.map((column) => (
        <TaskColumn
          key={column.label}
          label={column.label}
          tasks={column.tasks}
        ></TaskColumn>
      ))}

      <Button variant="outline"> Add new</Button>
    </div>
  );
}
