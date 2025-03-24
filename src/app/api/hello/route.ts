export const runtime = 'edge' 

export async function GET() {
  return new Response('Hello from Vercel Edge Function!', {
    headers: {
      'content-type': 'text/plain',
    },
  })
}
