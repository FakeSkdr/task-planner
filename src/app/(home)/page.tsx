"use client";

import { useQuery } from "@tanstack/react-query";

import { getTasks } from "@/components/tasks/actions/tasks.actions";
import { TaskTable } from "@/components/tasks/task-table";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks(),
  });

  return (
    <main className="flex-1 overflow-x-auto bg-muted/40 p-6">
      {(!data || isLoading) && <>Ugly loader</>}
      {data && <TaskTable data={data} />}
    </main>
  );
}
