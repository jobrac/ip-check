export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
 

  return new Response(
    JSON.stringify(Object.keys(req.headers)),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  )
}