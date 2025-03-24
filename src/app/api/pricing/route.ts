'use server'
import { redirect } from "next/navigation";

export const runtime = 'edge';
export async function GET() {
  try {
    
    redirect("/dashboard");
  } catch (error) {
    console.log("Error fetching building data:", error)
    return Response.json(
      { error },
      { status: 500 }
    );
  }
}