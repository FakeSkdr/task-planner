import type { Identifier } from "dnd-core";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../ItemTypes";

import { Card, CardContent } from "../ui/card";
import { Task } from "./task";
import { useTaskTableContext } from "./task-table-context";

interface TaskCardProps {
  columnId: string;
  task: Task;
  index: number;
}

export interface DragItem {
  index: number;
  originColumnId: string;
  task: Task;
  type: string;
}

export function TaskCard({ task, index, columnId }: TaskCardProps) {
  const { moveCard } = useTaskTableContext();

  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (columnId === item.originColumnId && dragIndex === hoverIndex) {
        return;
      }

      moveCard(item.originColumnId, dragIndex, columnId, hoverIndex);

      item.index = hoverIndex;
      if (item.originColumnId !== columnId) {
        item.originColumnId = columnId;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id: task.id, index, originColumnId: columnId, task };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <Card ref={ref} style={{ opacity }} data-handler-id={handlerId}>
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
