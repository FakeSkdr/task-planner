import { Droppable } from "react-beautiful-dnd";
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
        {(provided) => (
          <div
            className="space-y-4 p-4"
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
