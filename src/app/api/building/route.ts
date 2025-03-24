
export const runtime = 'edge';
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
