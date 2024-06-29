import { cn } from "@/lib/utils";
import { Draggable } from "@hello-pangea/dnd";
import { Card, CardContent } from "../ui/card";
import { Task } from "./task";

interface TaskCardProps {
  task: Task;
  index: number;
}

export function TaskCard({ task, index }: TaskCardProps) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Card
          className={cn("my-2", snapshot.isDragging && "bg-dragging")}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium">{task.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {task.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
}
