import { NextResponse } from "next/server";
import openAi from "@/openAi";

export async function POST(req: Request) {
  const { todos } = await req.json();

  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "When responding, welcome the user as Augusto and say hi. Limit the response to 200 characters",
      },
      {
        role: "user",
        content: `Hi, Provide a summary of the following todos. Count how many todos are in each category such as To do, in progress and done , then tell the user to have a nice day.  Here´s the data: ${JSON.stringify(
          todos
        )} `,
      },
    ],
  });

  const { data } = response;
  return NextResponse.json(data);
}
