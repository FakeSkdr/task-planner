export interface Column {
  label: string;
  tasks: Task[];
}

export interface Task {
  id: number;
  title: string;
  description: string;
}
