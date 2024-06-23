import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";
import { Column } from "./task";

type TaskTableContextType = {
  columns: Column[];
  setColumns: Dispatch<SetStateAction<Column[] | []>>;
  moveCard: (
    originColumnId: string,
    originOldIndex: number,
    targetColumnId: string,
    targetIndex: number,
  ) => void;
};

type TaskTableContextProviderType = {
  columns: Column[];
  children: React.ReactNode;
};

const TaskTableContext = createContext<TaskTableContextType | null>(null);

export const TaskTableContextProvider = ({
  columns,
  children,
}: TaskTableContextProviderType) => {
  const [_columns, setColumns] = useState<Column[]>(columns);

  const moveCard = useCallback(
    (
      originColumnId: string,
      originOldIndex: number,
      targetColumnId: string,
      targetIndex: number,
    ) => {
      let colIndex = columns.findIndex(
        (column) => column.label === originColumnId,
      );
      const colTasks = columns[colIndex]?.tasks;
      const draggedTask = colTasks.splice(originOldIndex, 1)[0];

      if (originColumnId === targetColumnId) {
        const tasks = [
          ...(colTasks.slice(0, targetIndex) || []),
          draggedTask,
          ...(colTasks.slice(targetIndex) || []),
        ];

        columns[colIndex].tasks = tasks;
        setColumns([...columns]);
      } else {
        let newColIndex = columns.findIndex(
          (column) => column.label === targetColumnId,
        );

        columns[colIndex].tasks = colTasks;

        // Insert the dragged element into the new column
        const newColTasks = columns[newColIndex]?.tasks;
        const updatedNewColTasks = [
          ...(newColTasks.slice(0, targetIndex) || []),
          draggedTask,
          ...(newColTasks.slice(targetIndex) || []),
        ];

        columns[newColIndex].tasks = updatedNewColTasks;

        setColumns([...columns]);
      }
    },
    [columns],
  );

  return (
    <TaskTableContext.Provider
      value={{ moveCard, columns: _columns, setColumns }}
    >
      {children}
    </TaskTableContext.Provider>
  );
};

export const useTaskTableContext = () => {
  const context = useContext(TaskTableContext);
  if (!context) {
    throw new Error(
      "TaskTable.* component must be rendered as child of TaskTable component.",
    );
  }

  return context;
};

export default TaskTableContext;
