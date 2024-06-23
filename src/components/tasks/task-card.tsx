import { Card, CardContent } from "../ui/card";
import { Task } from "./task";

interface TaskCardProps {
  task: Task;
  onDragStart: (task: any) => void;
}

export function TaskCard({ task, onDragStart }: TaskCardProps) {
  return (
    <Card key={task.id} draggable onDragStart={onDragStart}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-medium">{task.title}</h3>
            <p className="text-sm text-muted-foreground">{task.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
