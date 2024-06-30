"use client";

import { TaskTable } from "@/components/tasks/task-table";
import { getAllTasks } from "@/components/tasks/tasks.actions";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getAllTasks(),
  });

  console.log(process);

  return (
    <main className="flex-1 overflow-x-auto bg-muted/40 p-6">
      {process.env.NEXT_PUBLIC_VERCEL_ENV} -{" "}
      {process.env.NEXT_PUBLIC_VERCEL_ENV}
      {(!data || isLoading) && <>Ugly loader</>}
      {data && <TaskTable data={data} />}
    </main>
  );
}
