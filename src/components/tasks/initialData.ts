import { TaskTable } from "./task";

export const initialData: TaskTable = {
  tasks: {
    "task-1": {
      id: "task-1",
      title: "Task 1",
      description: "Description 1",
    },
    "task-2": {
      id: "task-2",
      title: "Task 2",
      description: "Description 2",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2"],
    },
  },
  columnOrder: ["column-1"],
};
