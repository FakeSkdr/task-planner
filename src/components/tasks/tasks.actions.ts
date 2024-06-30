"use server";

import { TaskTable } from "@/components/tasks/task";

const BASE_URL =
  process.env.VERCEL_ENV === "production" ||
  process.env.VERCEL_ENV === "preview"
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export async function getAllTasks(): Promise<TaskTable> {
  const data = await fetch(`${BASE_URL}/api/tasks`, {
    cache: "no-store",
  });

  return data.json();
}
