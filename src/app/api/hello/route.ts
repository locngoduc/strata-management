//api/hello/route.ts


//HTTP GET Request
export default function GET(request: Request): Response{
  return new Response('Hello from Vercel!');
}