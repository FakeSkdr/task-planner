import { cn } from "@/lib/utils";
import { Droppable } from "@hello-pangea/dnd";
import { Column, Task } from "./task";
import { TaskCard } from "./task-card";

interface TaskColumnProps {
  column: Column;
  tasks: Task[];
}

export function TaskColumn({ column, tasks }: TaskColumnProps) {
  return (
    <div className="h-fit w-96 min-w-96 rounded-lg bg-card shadow">
      <div className="border-b p-4">
        <h2 className="text-lg font-semibold">{column.title}</h2>
      </div>
      <Droppable droppableId={column.id}>
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
  );
}
