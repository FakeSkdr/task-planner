"use client";

import { TaskColumn } from "@/components/tasks/task-column";
import { DragDropContext } from "@hello-pangea/dnd";
import type { DropResult, ResponderProvided } from "@hello-pangea/dnd";
import type { Column, TaskTable as TaskTableType } from "./task";
import { useCallback, useState } from "react";

interface TaskTableProps {
  data: TaskTableType;
}

export function TaskTable({ data }: TaskTableProps) {
  const [columns, setColumns] = useState(data.columns);

  const { columnOrder, tasks } = data;

  const onDragEnd = useCallback(
    (result: DropResult, provided: ResponderProvided) => {
      const { destination, source, draggableId } = result;
      if (!destination) {
        return;
      }
      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }
      const start = columns[source.droppableId];
      const finish = columns[destination.droppableId];

      if (start === finish) {
        const newTaskIds = Array.from(start.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn: Column = { ...start, taskIds: newTaskIds };

        setColumns({
          ...columns,
          [newColumn.id]: newColumn,
        });
        return;
      }

      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart: Column = { ...start, taskIds: startTaskIds };

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish: Column = { ...finish, taskIds: finishTaskIds };

      setColumns({
        ...columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      });
    },
    [columns],
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-row gap-6">
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
      </div>
    </DragDropContext>
  );
}
