import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "subscribers.json");

interface Subscriber {
  email: string;
  subscribedAt: string;
}

async function getSubscribers(): Promise<Subscriber[]> {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveSubscribers(subscribers: Subscriber[]): Promise<void> {
  const dir = path.dirname(DATA_FILE);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(subscribers, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Get existing subscribers
    const subscribers = await getSubscribers();

    // Check if already subscribed
    const exists = subscribers.some(
      (sub) => sub.email.toLowerCase() === email.toLowerCase()
    );
    if (exists) {
      return NextResponse.json(
        { error: "Email already subscribed" },
        { status: 409 }
      );
    }

    // Add new subscriber
    subscribers.push({
      email: email.toLowerCase(),
      subscribedAt: new Date().toISOString(),
    });

    await saveSubscribers(subscribers);

    return NextResponse.json(
      { message: "Successfully subscribed!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const subscribers = await getSubscribers();
    return NextResponse.json({ count: subscribers.length });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
