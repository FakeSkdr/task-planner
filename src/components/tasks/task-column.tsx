import React from "react";
import { cn } from "@/lib/utils";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { DragTypes } from "./drag-type";
import { Column, Task } from "./task";
import { TaskCard } from "./task-card";

interface TaskColumnProps {
  index: number;
  column: Column;
  tasks: Task[];
}

export function TaskColumn({ column, tasks, index }: TaskColumnProps) {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <div
          className="mx-3 h-fit w-96 min-w-96 rounded-lg bg-card shadow"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="border-b p-4" {...provided.dragHandleProps}>
            <h2 className="text-lg font-semibold">{column.title}</h2>
          </div>
          <Droppable droppableId={column.id} type={DragTypes.Task}>
            {(provided, snapshot) => (
              <div
                className={cn(
                  "flex flex-col p-4",
                  snapshot.isDraggingOver && "bg-dragging-over",
                )}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {tasks.map((task, index) => (
                  <TaskCard key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}
