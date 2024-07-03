"use client";

import { TaskColumn } from "@/components/tasks/task-column";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import type { DropResult, ResponderProvided } from "@hello-pangea/dnd";
import type { Column, TaskTable as TaskTableType } from "./task";
import { useCallback, useState } from "react";
import { DragTypes } from "./drag-type";
import { updateColumnTasks } from "./actions/tasks.actions";

interface TaskTableProps {
  data: TaskTableType;
}

export function TaskTable({ data }: TaskTableProps) {
  const [columns, setColumns] = useState(data.columns);
  const [columnOrder, setColumnOrder] = useState(data.columnOrder);

  const { tasks } = data;

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { destination, source, draggableId, type } = result;
      if (!destination) {
        return;
      }
      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }

      if (type === DragTypes.Column) {
        const newColumnOrder = Array.from(columnOrder);
        newColumnOrder.splice(source.index, 1);
        newColumnOrder.splice(destination.index, 0, draggableId);

        setColumnOrder(newColumnOrder);
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

        updateColumnTasks([
          {
            columnId: newColumn.id,
            taskIds: newTaskIds,
          },
        ]);

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

      updateColumnTasks([
        {
          columnId: newStart.id,
          taskIds: startTaskIds,
        },
        {
          columnId: newFinish.id,
          taskIds: finishTaskIds,
        },
      ]);
    },
    [columns, columnOrder],
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="all-columns"
        direction="horizontal"
        type={DragTypes.Column}
      >
        {(provided) => (
          <div
            className="flex flex-row"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {columnOrder.map((columnId, index) => {
              const column = columns[columnId];
              const columnTasks = column.taskIds.map((taskId) => tasks[taskId]);

              return (
                <TaskColumn
                  key={column.id}
                  column={column}
                  tasks={columnTasks}
                  index={index}
                ></TaskColumn>
              );
            })}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
