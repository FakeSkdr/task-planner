import { TaskTable } from "../../../components/tasks/task";

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
    "task-3": {
      id: "task-3",
      title: "Task 3",
      description: "Description 3",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};
