import { Task } from "./task";
import { TaskCard } from "./task-card";

interface TaskColumnProps {
  label: string;
  tasks: Task[];
}

export function TaskColumn({ label, tasks }: TaskColumnProps) {
  return (
    <div className="w-96 min-w-96 rounded-lg bg-card shadow">
      <div className="border-b p-4">
        <h2 className="text-lg font-semibold">{label}</h2>
      </div>
      <div className="space-y-4 p-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
