import { NextResponse } from "next/server";

import { initialData } from "./initialData";

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function GET(request: Request) {
  // await sleep(2000);

  return NextResponse.json(initialData, { status: 200 });
}
