import { initialData } from "@/components/tasks/initialData";
import { TaskTable } from "@/components/tasks/task-table";

export default function Component() {
  return (
    <main className="flex-1 overflow-x-auto bg-muted/40 p-6">
      <TaskTable data={initialData} />
    </main>
  );
}
