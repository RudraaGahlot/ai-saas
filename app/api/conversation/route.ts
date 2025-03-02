import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

// import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
// import { checkSubscription } from "@/lib/subscription";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) return new NextResponse("UnAuthorized", { status: 401 });

    if (!configuration.apiKey)
      return new NextResponse("OpenAI API Key Not Configured", { status: 500 });

    if (!messages)
      return new NextResponse("Messages Are Required", { status: 400 });

    // const freeTrial = await checkApiLimit();
    // const isPro = await checkSubscription();

    // if (!freeTrial && !isPro)
    //   return new NextResponse("Free Trial Has Expired", { status: 403 });

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages
    });

    // if (!isPro) await increaseApiLimit();

    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.error("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}