import { Task } from "./task";
import { TaskCard } from "./task-card";

interface TaskColumnProps {
  label: string;
  tasks: Task[];

  // FIXME: Events for card - to be removed from params
  onTaskDragOver: (e: any) => void;
  onTaskDrop: (label: string) => void;
  onTaskDragStart: (task: Task) => void;
}

export function TaskColumn({
  label,
  tasks,
  onTaskDragOver,
  onTaskDrop,
  onTaskDragStart,
}: TaskColumnProps) {
  return (
    <div
      className="w-96 min-w-96 rounded-lg bg-card shadow"
      onDragOver={onTaskDragOver}
      onDrop={() => onTaskDrop(label)}
    >
      <div className="border-b p-4">
        <h2 className="text-lg font-semibold">{label}</h2>
      </div>
      <div className="space-y-4 p-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            onDragStart={() => onTaskDragStart(task)}
            task={task}
          />
        ))}
      </div>
    </div>
  );
}
