"use client";

import { TaskColumn } from "@/components/tasks/task-column";
import { DragDropContext } from "react-beautiful-dnd";
import type { TaskTable as TaskTableType } from "./task";

interface TaskTableProps {
  data: TaskTableType;
}

export function TaskTable({ data }: TaskTableProps) {
  const { columns, columnOrder, tasks } = data;

  return (
    <div className="flex flex-row gap-6">
      <DragDropContext onDragEnd={() => {}}>
        {columnOrder.map((columnId) => {
          const column = columns[columnId];
          const columnTasks = column.taskIds.map((taskId) => tasks[taskId]);

          return (
            <TaskColumn
              key={column.id}
              column={column}
              tasks={columnTasks}
            ></TaskColumn>
          );
        })}
      </DragDropContext>
    </div>
  );
}
