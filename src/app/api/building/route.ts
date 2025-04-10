
import type { NextApiRequest, NextApiResponse } from 'next';
export const runtime = 'edge';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Cron job executed successfully!' });
}
export async function GET() {
  const building = {
    buildingName: "Skyline Tower",
    address: "123 Main Street, Sydney, ABC 12131",
    floors: 15,
    yearBuilt: 2010
  };

  return new Response(JSON.stringify(building), {
    headers: {
      'content-type': 'application/json',
    },
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);

  return new Response(JSON.stringify(body), {
    headers: {
      'content-type': 'application/json',
    },
  });
}
