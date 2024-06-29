export interface Column {
  id: string;
  title: string;
  taskIds: string[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
}

export interface TaskTable {
  tasks: {
    [key: string]: Task;
  };
  columns: {
    [key: string]: Column;
  };
  columnOrder: string[];
}
