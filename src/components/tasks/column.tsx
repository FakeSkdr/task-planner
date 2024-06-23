import { useCallback, useState } from "react";
import { Task } from "./task";
import { TaskCard } from "./task-card";

export interface ColumnProps {
  label: string;
  tasks: Task[];
}

export function Column({ label, tasks }: ColumnProps) {
  const [cards, setCards] = useState<Task[]>(tasks);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const draggedCard = cards.splice(dragIndex, 1)[0];

      const _cards = [
        ...cards.slice(0, hoverIndex),
        draggedCard,
        ...cards.slice(hoverIndex),
      ];

      setCards(_cards);
    },
    [cards],
  );

  return (
    <div className="w-96 min-w-96 rounded-lg bg-card shadow">
      <div className="border-b p-4">
        <h2 className="text-lg font-semibold">{label}</h2>
      </div>
      <div className="space-y-4 p-4">
        {cards.map((task, index) => (
          <TaskCard
            key={task.id}
            index={index}
            moveCard={moveCard}
            task={task}
          />
        ))}
      </div>
    </div>
  );
}
