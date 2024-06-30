"use server";

import { TaskTable } from "@/components/tasks/task";

const BASE_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";

// const BASE_URL = "http://localhost:3000"; //window.location.origin;

export async function getAllTasks(): Promise<TaskTable> {
  console.log("NEXT_PUBLIC_VERCEL_ENV", process.env.NEXT_PUBLIC_VERCEL_ENV);
  console.log("NEXT_PUBLIC_VERCEL_URL", process.env.NEXT_PUBLIC_VERCEL_URL);
  console.log("BASE_URL", BASE_URL);

  const data = await fetch(`${BASE_URL}/api/tasks`, {
    cache: "no-store",
    method: "GET",
  });
  return data.json();
}
