import { TaskTable } from "@/components/tasks/task";

import { initialData } from "./initialData";

const TASK_API_KEY = "tasks";
function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function getTasks(): Promise<TaskTable> {
  const rawData = window.localStorage.getItem(TASK_API_KEY);

  if (rawData === null) {
    window.localStorage.setItem(TASK_API_KEY, JSON.stringify(initialData));

    return Promise.resolve(initialData);
  }

  const data: TaskTable = JSON.parse(rawData);

  await sleep(500);

  return Promise.resolve(data);
}

export async function updateColumnTasks(
  taskIdsByColumnId: { columnId: string; taskIds: string[] }[],
): Promise<TaskTable> {
  const rawData = window.localStorage.getItem(TASK_API_KEY) as string;

  const data: TaskTable = JSON.parse(rawData);

  taskIdsByColumnId.forEach((col) => {
    data.columns[col.columnId].taskIds = col.taskIds;
  });

  window.localStorage.setItem(TASK_API_KEY, JSON.stringify(data));

  await sleep(500);

  return Promise.resolve(data);
}
